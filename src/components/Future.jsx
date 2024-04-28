import { useState, useEffect } from "react";
import Meals from "./Meals";
import QrImg from "./QrImg";
import arr from "../assets/arrow.svg";
import cal from "../assets/calendar.svg";
import Calendar from "react-calendar";
import moment from "moment";

function Future({ setType, type }) {
  const [initial, setInitial] = useState(new Date());
  const [final, setFinal] = useState(new Date());
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://pos-api.effortsnode.srmd.org/v1/items/getMyPasses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        param: "4c788c407d64217d89a7d934abe356cb",
        startDate: moment(initial).format("YYYY-MM-DD"),
        endDate: moment(final).format("YYYY-MM-DD"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, [initial, final]);

  return (
    <>
      <Meals setType={setType} />
      <div className="w-[90%] flex justify-around items-center bg-white ml-5 p-2 rounded-md">
        <img src={cal} alt="calendar-icon" />
        <div className="flex-col text-[#c66a10] font-semibold">
          <button onClick={() => setStart((prev) => !prev)}>From</button>
          {start ? (
            <Calendar
              onChange={setInitial}
              minDate={new Date()}
              value={initial}
            />
          ) : (
            <div className="text-s text-[#8e4d0e] w-full">
              {moment(initial).format("DD/MM/YY, ddd")}
            </div>
          )}
        </div>
        <>
          <img src={arr} alt="to" height={24} width={24} />
        </>
        <div className="flex-col text-[#c66a10] font-semibold">
          <button onClick={() => setEnd((prev) => !prev)}>To</button>
          {end ? (
            <Calendar onChange={setFinal} minDate={new Date()} value={final} />
          ) : (
            <div className="text-s text-[#8e4d0e] w-full">
              {moment(final).format("DD/MM/YY, ddd")}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-start mt-5 overflow-x-scroll no-scrollbar px-5 gap-5">
        {data && Object.keys(data).length ? (
          data
            ?.filter((item) => !type || item.type === type)

            .map((item) => <QrImg data={item} key={item.id} />)
        ) : (
          <>No passes available for this time period</>
        )}
      </div>
    </>
  );
}

export default Future;
