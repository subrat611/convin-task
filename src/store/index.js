import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./bucketSlice";
import historySlice from "./historySlice";

const store = configureStore({
  reducer: {
    bucket: bucketSlice,
    history: historySlice,
  },
});

export default store;
