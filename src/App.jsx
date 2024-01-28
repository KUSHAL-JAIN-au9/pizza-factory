import { Badge, Button } from "flowbite-react";
import "./App.css";
import PizzaStatus from "./layout/PizzaStatus";
import PizzaTable from "./components/PizzaTable";
import PizzaForm from "./components/pizzaForm";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  ORDER_IN_MAKING,
  ORDER_PICKED,
  ORDER_PLACED,
  ORDER_READY,
} from "./constants";

function App() {
  const [makingOrders, setMakingOrders] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [pickedOrders, setPickedOrders] = useState([]);
  const [placedOrders, setPlacedOrders] = useState([]);

  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const filterdMakingOrders = orders.filter(
      (order) => order.status === ORDER_IN_MAKING
    );
    const filteredRedyOrders = orders.filter(
      (order) => order.status === ORDER_READY
    );
    const filteredPickedOrders = orders.filter(
      (order) => order.status === ORDER_PICKED
    );
    const filteredPlacedOrders = orders.filter(
      (order) => order.status === ORDER_PLACED
    );

    console.log(
      filterdMakingOrders,
      filteredPickedOrders,
      filteredRedyOrders,
      filteredPlacedOrders
    );
    setPlacedOrders(filteredPlacedOrders);
    setMakingOrders(filterdMakingOrders);
    setReadyOrders(filteredRedyOrders);
    setPickedOrders(filteredPickedOrders);
  }, [orders]);

  console.log("orders", orders);
  return (
    <div className="w-full h-auto flex flex-col ">
      <PizzaForm />
      <PizzaStatus label={"Order Placed 😇 "} orders={placedOrders} />
      <PizzaStatus label={"Order In Making 🧑‍🍳"} orders={makingOrders} />
      <PizzaStatus label={"Order Ready 🍕"} orders={readyOrders} />
      <PizzaStatus label={"Order Picked 🛵"} orders={pickedOrders} />

      <PizzaTable />
    </div>
  );
}

export default App;
