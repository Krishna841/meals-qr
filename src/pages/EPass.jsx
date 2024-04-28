import { useState, useEffect } from "react";
import logo from "../assets/mission_logo.svg";
import Meals from "../components/Meals";
import QrImg from "../components/QrImg";
import Calendar from "react-calendar";
import arr from "../assets/arrow.svg";
import cal from "../assets/calendar.svg";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

function EPassPage() {
  const [clickLeft, setClickLeft] = useState(true);
  const [clickRight, setClickRight] = useState(false);
  const [initial, setInitial] = useState("2024-04-08");
  const [final, setFinal] = useState(new Date());
  const [type, setType] = useState("");
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [data, setData] = useState();
  let { passId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      fetch("https://pos-api.effortsnode.srmd.org/v1/items/getMyPasses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          param: passId,
          startDate: moment(initial).format("YYYY-MM-DD"),
          endDate: moment(final).format("YYYY-MM-DD"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === false) {
            navigate("/");
          }
          setData(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [initial, final, passId, navigate]);

  return (
    <div className="bg-[#efede7] h-[100vh]">
      <div className="bg-[#c66a10] flex justify-center py-5	">
        <img src={logo} alt="mission_logo" width={200} height={100}></img>
      </div>
      <div className="flex items-center h-16 text-[#c66a10] font-semibold text-xs bg-white ">
        <div
          className={`w-[49.5%]  px-7 h-[100%] py-5 flex justify-center items-center ${
            clickLeft ? "border-b-4 border-[#c66a10]" : " "
          }`}
          onClick={() => {
            setClickLeft((prev) => !prev);
            setClickRight((prev) => !prev);
          }}
        >
          Today's QR
        </div>
        <div className="h-16 w-0.5 bg-[#e2e2e2]" />
        <div
          className={`h-16 flex items-center justify-center w-[49.5%] py-5 px-7  ${
            clickRight ? "border-b-4 border-[#c66a10]" : ""
          }`}
          onClick={() => {
            setClickRight((prev) => !prev);
            setClickLeft((prev) => !prev);
          }}
        >
          Future QR
        </div>
      </div>
      {clickLeft ? (
        <>
          <Meals setType={setType} />
          <div className="flex items-center justify-start mt-5 overflow-x-scroll no-scrollbar px-5 gap-5">
            {data
              ?.filter((item) => type || item.type === type)
              .map((item) => (
                <QrImg data={item} key={item.id} />
              ))}
          </div>
        </>
      ) : (
        <>
          <Meals setType={setType} />
          <div className="w-[90%] flex justify-around items-center bg-white ml-5 p-2 rounded-md">
            <img src={cal} alt="calendar-icon" />
            <div className="flex-col text-[#c66a10] font-semibold">
              <button onClick={() => setStart((prev) => !prev)}>From</button>
              {start ? (
                <Calendar
                  onChange={setInitial}
                  // minDate={new Date()}
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
                <Calendar
                  onChange={setFinal}
                  // minDate={new Date()}
                  value={final}
                />
              ) : (
                <div className="text-s text-[#8e4d0e] w-full">
                  {moment(final).format("DD/MM/YY, ddd")}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start mt-5 overflow-x-scroll no-scrollbar px-5 gap-5">
            {data?.map((item) => (
              <QrImg data={item} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EPassPage;
