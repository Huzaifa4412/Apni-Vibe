import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../../Typing';

interface CartState {
    cart: Cart[];
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const idx = state.cart.findIndex(c => c.id === action.payload.id);
            if (idx >= 0) {
                state.cart[idx].qty += 1
            }
            else {
                state.cart.push({ ...action.payload });
            }
        },
        delFromCart: (state, action) => {
            const tempData = state.cart.filter((item: Cart) => item.id !== action.payload);
            state.cart = tempData

        },
        descQty: (state, action) => {
            const idx = state.cart.findIndex((item: Cart) => item.id == action.payload)
            if (state.cart[idx].qty >= 1) {
                state.cart[idx].qty -= 1
            }
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, delFromCart, descQty, clearCart } = cartSlice.actions

export default cartSlice.reducer