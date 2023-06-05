import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice/productSliceN";
import basketSlice from "./basketSlice/basketSliceN";
import { categSlice } from "./categoriesSlice/categoriessliceN";

export const store = configureStore({
  reducer: {
    products: productSlice,
    basket: basketSlice,
    category: categSlice,
  },
});
