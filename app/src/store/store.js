import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./categoriesReducer/categoriesReducer";
import { productsReducer } from "./productsReducer/productsReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer/basketReducer";

import productSlice from "./productSlice/productSliceN";
import basketSlice from "./basketSlice/basketSliceN";
import { catSlice, categSlice } from "./categoriesSlice/categoriessliceN";

// const rootReducer = combineReducers({
//   categories: categoriesReducer,
//   products: productsReducer,
//   basket: basketReducer,
// });

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    products: productSlice,
    basket: basketSlice,
    category: categSlice,
  },
});
