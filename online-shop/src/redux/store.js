import productReducer from './slices/productSlice'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    allProducts: productReducer
  }
})