import { createSlice } from "@reduxjs/toolkit";
export const CardSlicer = createSlice({
  name: "cart",
  initialState: [],
  reducers:{
    saveCart: (state, action) =>{
        state = action.payload
    }
  }
})

export const {saveCart} = CardSlicer.actions

export default CardSlicer