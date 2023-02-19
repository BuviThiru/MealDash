import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    
    name : 'cart',
    initialState :{
        items :[]
    },
    reducers:{
        addItem :(state,action) =>{
            state.items.push(action.payload)
           
        },
        removeItem :(state,action)=>{
            // console.log(">>>>>>>>>>APYLOAD",action.payload)
            let indexVal = state.items.find(obj => obj.id === action.payload)
            console.log(indexVal)
            if (indexVal !== -1) {
                state.items.splice(indexVal, 1);
        }},
        clearCart :(state, action)=>{
            state.items = []
        },
    }

})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;