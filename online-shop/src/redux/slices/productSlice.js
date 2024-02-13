import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedProduct: {}
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SELECTED_PRODUCT: (state, action) => {
      state.selectedProduct = action.payload;
    },
    REMOVE_SELECTD_PRODUCT: (state, action) => {
      state.selectedProduct = {};
    }
  }
})

// Action creators are generated for each case reducer function
export const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTD_PRODUCT } = productSlice.actions

export default productSlice.reducer