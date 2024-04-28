import { useState } from "react";

import logo from "../assets/mission_logo.svg";
import Today from "./Today";
import Future from "./Future";

function Home() {
  const [clickLeft, setClickLeft] = useState(true);
  const [clickRight, setClickRight] = useState(false);
  const [type, setType] = useState("");

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
        <Today type={type} setType={setType} />
      ) : (
        <Future type={type} setType={setType} />
      )}
    </div>
  );
}

export default Home;
