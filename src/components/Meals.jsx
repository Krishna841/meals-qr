import React, { useState } from "react";

function Meals({ setType }) {
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  return (
    <div className="flex overflow-x-scroll text-[14px] justify-around p-4">
      <div
        className={`m-1 flex h-[37px] w-[104px] items-center justify-center rounded-3xl  ${
          all
            ? "bg-[#8e4d0e] text-white"
            : "border-solid border border-[#c66a10] text-[#c66a10] bg-white"
        }`}
        onClick={() => {
          setAll(true);
          setBreakfast(false);
          setLunch(false);
          setDinner(false);
          setType("");
        }}
      >
        All
      </div>
      <div
        className={`m-1 flex h-[37px] w-[104px] items-center justify-center rounded-3xl  ${
          breakfast
            ? "bg-[#8e4d0e] text-white"
            : "border-solid border border-[#c66a10] text-[#c66a10] bg-white"
        }`}
        onClick={() => {
          setAll(false);
          setBreakfast(true);
          setLunch(false);
          setDinner(false);
          setType("Breakfast");
        }}
      >
        Breakfast
      </div>
      <div
        className={`m-1 flex h-[37px] w-[104px] items-center justify-center rounded-3xl  ${
          lunch
            ? "bg-[#8e4d0e] text-white"
            : "border-solid border border-[#c66a10] text-[#c66a10] bg-white"
        }`}
        onClick={() => {
          setAll(false);
          setBreakfast(false);
          setLunch(true);
          setDinner(false);
          setType("Lunch");
        }}
      >
        Lunch
      </div>
      <div
        className={`m-1 flex h-[37px] w-[104px] items-center justify-center rounded-3xl  ${
          dinner
            ? "bg-[#8e4d0e] text-white"
            : "border-solid border border-[#c66a10] text-[#c66a10] bg-white"
        }`}
        onClick={() => {
          setAll(false);
          setBreakfast(false);
          setLunch(false);
          setDinner(true);
          setType("Dinner");
        }}
      >
        Dinner
      </div>
    </div>
  );
}

export default Meals;
