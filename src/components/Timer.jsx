import React, { useEffect } from "react";
import Heading from "./heading";
import { CalculateTime } from "../utils/utils";

const Timer = ({ setIntervalId, seconds, setSeconds }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    setIntervalId(interval);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  //   const minutes = Math.floor(seconds / 60);
  //   const displaySeconds = seconds % 60;
  //   const showminutes = `${minutes
  //     .toString()
  //     .padStart(2, "0")}min ${displaySeconds.toString().padStart(2, "0")}sec `;

  //   const showseconds = `${displaySeconds.toString().padStart(2, "0")}sec `;

  return (
    <div className="w-full mx-auto">
      <Heading title={CalculateTime(seconds)} />
    </div>
  );
};

export default Timer;
