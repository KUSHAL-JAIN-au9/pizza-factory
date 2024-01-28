import { Button, Label, Select } from "flowbite-react";
import React, { useState } from "react";
import Heading from "./heading";
import { estimatedTime, images } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/order.reducer";
import { ORDER_PLACED } from "../constants";

const PizzaOrder = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [base, setBase] = useState("");
  const [err, setErr] = useState("");

  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  console.log(orders);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (orders.length >= 10) {
      setErr("Not taking any order for now");
      setBase("");
      setType("");
      setSize("");

      return;
    }

    if (type === "" || size === "" || base === "") {
      setErr("Please select all the fields");
      return;
    }
    console.log({ type, size, base, estimatedTime: estimatedTime[size] });

    const payload = {
      id: orders.length + 1,
      type,
      size,
      base,
      estimatedSec: estimatedTime[size] * 60,
      makingTime: { time: "", seconds: null },
      status: ORDER_PLACED,
      image: images[Math.floor(Math.random() * images.length)],
      acceptedOrderTime: { time: "", seconds: null },
      pickingTime: { time: "", seconds: null },
    };

    dispatch(addOrder(payload));

    setBase("");
    setType("");
    setSize("");
    setErr("");
  };

  return (
    <div className="w-[100%] h-[30rem] flex flex-col justify-around items-center">
      <Heading title={`🍕  Order Your Pizza`} />
      <form
        className=" w-1/2 h-[25rem] p-4 flex  flex-col justify-around  bg-[rgba(255,255,255,0.1)] rounded-lg backdrop-blur-[50px] shadow-md "
        onSubmit={handleOrderSubmit}
      >
        <span className=" w-full text-neon-red font-semibold h-2 text-center">
          {err && err}
        </span>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="pizza-type" value="Pizza type" />
          </div>
          <Select
            id="pizza-type"
            size={"xl"}
            value={type}
            onChange={(e) => {
              if (e.target.value === "veg" || e.target.value === "non-veg")
                setErr("");
              setType(e.target.value);
            }}
            required
          >
            <option hidden>Select a type</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </Select>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="pizza-size" value="Pizza type" />
          </div>
          <Select
            id="pizza-size"
            value={size}
            onChange={(e) => {
              if (
                e.target.value === "large" ||
                e.target.value === "medium" ||
                e.target.value === "small"
              )
                setErr("");
              setSize(e.target.value);
            }}
            required
          >
            <option hidden>Select a size</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </Select>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="pizza-base" value="Pizza base" />
          </div>

          <Select
            value={base}
            onChange={(e) => {
              if (e.target.value === "thin" || e.target.value === "thick")
                setErr("");
              setBase(e.target.value);
            }}
            required
          >
            <option hidden>Select a base</option>
            <option value="thin">Thin</option>
            <option value="thick">Thick</option>
          </Select>
        </div>
        <Button
          disabled={type == "" && base == "" && size == ""}
          gradientDuoTone="pinkToOrange"
          type="submit"
        >
          Place Order
        </Button>
        {/* <button type="submit">Place Order</button> */}
      </form>
      {/* <p>{orderStatus}</p> */}
    </div>
  );
};

export default PizzaOrder;
