import { useState, useEffect } from "react";
import Meals from "./Meals";
import QrImg from "./QrImg";
import moment from "moment";
import { BarLoader } from "react-spinners";

function Today({ setType, type, passId }) {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://pos-api.effortsnode.srmd.org/v1/items/getMyPasses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        param: passId,
        startDate: moment(new Date()).format("YYYY-MM-DD"),
        endDate: moment(new Date()).format("YYYY-MM-DD"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [passId]);

  return (
    <>
      <Meals setType={setType} />
      {loading ? (
        <div className="flex h-[45%] items-center justify-center mt-5">
          <BarLoader color="#8e4d0e" height={3} width={150} />
        </div>
      ) : (
        <div className="flex items-center justify-start mt-5 overflow-x-scroll no-scrollbar px-5 gap-5">
          {data && Object.keys(data).length ? (
            data
              ?.filter((item) => !type || item.type === type)
              .map((item) => (
                <QrImg
                  data={item}
                  key={item.id}
                  setLoadingImage={setLoadingImage}
                  loadingImage={loadingImage}
                />
              ))
          ) : (
            <div className="flex items-center">
              No passes available for today.
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Today;
