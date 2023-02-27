import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // console.log(current(state))
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                state.items[itemIndex].quantity++;

            }

        },
        removeItem: (state, action) => {
            console.log("REmovePayload",action.payload)
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                if (item.quantity === 1) {
                    state.items.splice(itemIndex, 1);
                } else {
                    item.quantity--;
                }

            }
        },
        clearCart: (state, action) => {
            state.items = []
        },
        returnQuantity :(state,action)=>{
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if(itemIndex != -1) return state.items[itemIndex].quantity
            else return ADD
        }
    }

})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;