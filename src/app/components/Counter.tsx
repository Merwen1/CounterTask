"use client";
import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0); //create state for the counter with initial value 0

  //create function to change the value depending on the sign parameter
  const handleChange = (sign: string) => {
    if (sign === "+") setNumber(number + 1);
    else setNumber(number - 1);
  };

  return (
    //this is the container div that wrap the counter and the buttons
    <div className="flex flex-col gap-7 w-80 m-10">
      {/* this is the counter number div  */}
      <div className="text-white text-center text-3xl font-bold py-3 border-solid border-yellow-700 border-2 rounded-3xl bg-yellow-500">
        {number}
      </div>
      {/* this is the div that wrap the buttons to make them in the same row */}
      <div className="flex justify-between">
        <button
          className="w-10 h-10 flex justify-center items-center bg-red-500 hover:bg-red-700 transition ease-in-out duration-300 p-6 text-white text-xl rounded-full"
          onClick={(e) => handleChange("-")} //here we call the function when the user click on the minus btn
        >
          -
        </button>
        <button
          className="w-10 h-10 flex justify-center items-center bg-blue-500 hover:bg-blue-700 transition ease-in-out duration-300 p-6 text-white text-xl rounded-full"
          onClick={(e) => handleChange("+")} //here we call the function when the user click on the plus btn
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
