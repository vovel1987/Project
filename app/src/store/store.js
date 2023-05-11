import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./categoriesReducer/categoriesReducer";
import { productsReducer } from "./productsReducer/productsReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer/basketReducer";
import { categoriesSlice } from "./categoriesSlice/categoriesslice";
import productSlice from "./productSlice/productSlice";
import basketSlice from "./basketSlice/basketSlice";

// const rootReducer = combineReducers({
//   categories: categoriesReducer,
//   products: productsReducer,
//   basket: basketReducer,
// });

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productSlice,
    basket: basketSlice,
  },
});
