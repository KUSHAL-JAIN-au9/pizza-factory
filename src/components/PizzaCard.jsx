import React, { useState } from "react";
import { images } from "../data";
import Timer from "./Timer";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../redux/order.reducer";
import { normalBackground, redBackground } from "../constants";

const PizzaCard = ({ id, base, estimatedSec, size, status, type, image }) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const dispatch = useDispatch();

  const clearTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handleOrderStatus = (id) => {
    console.log("timer", seconds);
    dispatch(updateOrderStatus({ orderId: id, time: seconds }));
    clearTimer();
  };

  return (
    <div
      key={id}
      className="w-80   mx-3 bg-transparent relative mb-12 cursor-pointer rounded-md"
    >
      <img
        src={image}
        alt=""
        className="mx-auto border-none h-80 hover:scale-95 transition-all duration-300 rounded-xl border border-white"
      />

      <div
        className={`text-center px-3 py-8 ${
          seconds > 3 * 60 ? redBackground : normalBackground
        } shadow-lg border border-white rounded-md md:w-4/5 mx-auto absolute -bottom-12 left-0 right-0  `}
      >
        {/* <h1 className="mb-3 text-xl text-neutralGrey font-semibold">{id}</h1> */}
        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          setIntervalId={setIntervalId}
        />
        <h1 className="text-2xl my-2">Order Id :{id}</h1>
        {/* <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2 ">
          <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
          {id}
        </span> */}
        <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2">
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
          {type}
        </span>
        <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2">
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
          {size}
        </span>
        <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2">
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
          {base}
        </span>

        <Button
          onClick={() => handleOrderStatus(id)}
          gradientDuoTone="pinkToOrange"
          type="submit"
          className="  px-4 py-2 mx-auto transition duration-300 ease-in-out  "
        >
          Next
        </Button>

        {/* <p> </p> */}
        {/* <Rating className="w-full text-center flex flex-row flex-wrap items-center justify-around ">
          <div className="w-20 flex flex-row">
            <Rating.Star />
            <p className="ml-2 mr-4 text-sm font-bol text-white">4.95</p>
          </div>
          <div>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-400"></span>
            <a href="#" className="text-sm font-medium no-underline text-white">
              73 reviews
            </a>
          </div>
        </Rating> */}
      </div>
    </div>
  );
};

export default PizzaCard;
