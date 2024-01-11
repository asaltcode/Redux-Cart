import { createSlice } from "@reduxjs/toolkit";

const findIndex = (array, id) =>{
  let index
  for(let i = 0; i < array.length; i++){
    if(array[i].id === id){
      index = i
      break
    }
  }
  return index
}


export const counterSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers : {
    saveAllCart: (state, action)=>{
     return action.payload
    },
    deleteCart: (state, action) => {
        let id = action.payload
        let index = findIndex(state, id)
        if(index != null){
          state.splice(index, 1)
        }
    },

    
  }
})

export const {saveAllCart, deleteCart} = counterSlice.actions

export default counterSlice.reducer

