import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(name, description, price, available) {
        return {
          payload: { id: nanoid(), name, description, price, available },
        };
      },
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    toggleAvailability(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } =
  productsSlice.actions;

export default productsSlice.reducer;
