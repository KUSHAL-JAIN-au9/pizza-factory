import { createSlice } from "@reduxjs/toolkit";
import {
  ORDER_CANCELLED,
  ORDER_IN_MAKING,
  ORDER_PICKED,
  ORDER_PLACED,
  ORDER_READY,
} from "../constants";
import { CalculateTime } from "../utils/utils";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      console.log(action.payload);
      state.orders.push(action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { orderId, time } = action.payload;
      const order = state.orders.find((order) => order.id === orderId);

      console.log("order", order, time);
      if (order) {
        // order.status = status;
        switch (order.status) {
          case ORDER_PLACED:
            order.status = ORDER_IN_MAKING;
            order.acceptedOrderTime.time = CalculateTime(time);
            order.acceptedOrderTime.seconds = time;
            break;
          case ORDER_IN_MAKING:
            order.status = ORDER_READY;
            order.makingTime.time = CalculateTime(time);
            order.makingTime.seconds = time;
            break;
          case ORDER_READY:
            order.status = ORDER_PICKED;
            order.pickingTime.time = CalculateTime(time);
            order.pickingTime.seconds = time;
            break;
          default:
            order.status = ORDER_CANCELLED;
            break;
        }
      }
    },
    cancelOrder: (state, action) => {
      const { orderId } = action.payload;
      const order = state.orders.find((order) => order.id === orderId);
      order.status = ORDER_CANCELLED;
    },
  },
});

export const { addOrder, updateOrderStatus, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
