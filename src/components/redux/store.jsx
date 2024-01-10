import { configureStore } from "@reduxjs/toolkit";
import CardSlicer from "./CardSlicer";
export default configureStore({
  reducer:{
  cart : CardSlicer  
  }
})