import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order.reducer";

const store = configureStore({
  reducer: orderReducer,
});

export default store;
