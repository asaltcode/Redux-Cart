import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CardSlicer";

export default configureStore({
  reducer: {
     product: counterReducer,
  },
})
