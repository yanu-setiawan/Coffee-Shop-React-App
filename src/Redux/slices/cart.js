import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery: "",
  notes: "",
  shoppingCart: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deliveryMethod: (prevState, action) => {
      return { ...prevState, delivery: action.payload };
    },
    notes: (prevState, action) => {
      return { ...prevState, notes: action.payload };
    },
    addtoCart: (prevState, action) => {
      const exsistIdx = prevState.shoppingCart.findIndex(
        (item) =>
          item.product_id === action.payload.product_id &&
          item.size_id === action.payload.size_id
      );

      if (exsistIdx !== -1) {
        const existItem = prevState.shoppingCart[exsistIdx];
        const updatedItem = {
          ...existItem,
          qty: existItem.qty + action.payload.qty,
          subtotal: existItem.subtotal + action.payload.subtotal,
        };
        const updatedCart = [
          ...prevState.shoppingCart.slice(0, exsistIdx),
          updatedItem,
          ...prevState.shoppingCart.slice(exsistIdx + 1),
        ];
        return {
          ...prevState,
          shoppingCart: updatedCart,
        };
      } else {
        const updatedCart = [...prevState.shoppingCart, action.payload];
        return {
          ...prevState,
          shoppingCart: updatedCart,
        };
      }
    },
    resetCounter: () => {
      return initialState;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
