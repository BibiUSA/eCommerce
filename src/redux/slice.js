import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"cart",
    initialState:{
        cartArray:[]
    },
    reducers:{
        updateCart:(state,action)=>{
            state.cartArray = action.payload
        }
    }
})

export const {updateCart} =slice.actions;
export default slice.reducer;