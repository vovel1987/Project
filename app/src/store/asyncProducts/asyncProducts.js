import { loadProducts } from "../productsReducer/productsReducer";

export const asyncLoadProductss = async (dispatch) => {
  const response = await fetch("http://localhost:3333/products/all");
  const data = await response.json();
  dispatch(loadProducts(data));
};
