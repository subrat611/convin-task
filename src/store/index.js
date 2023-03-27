import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./bucketSlice";

const store = configureStore({
  reducer: {
    bucket: bucketSlice,
  },
});

export default store;
