import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
             state.items.push(action?.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItem :(state)=>{

            /** RTK is saying that you can mutate the state or return the 
             *  new state
             *  state.items.length = 0 
             * return state = {items : []}
             */
            state.items.length = 0;
        }
    }
})

export const{addItem,removeItem,clearItem} = cartSlice.actions

export default cartSlice.reducer;