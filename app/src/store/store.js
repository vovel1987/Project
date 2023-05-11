import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./categoriesReducer/categoriesReducer";
import { productsReducer } from "./productsReducer/productsReducer";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer/basketReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
