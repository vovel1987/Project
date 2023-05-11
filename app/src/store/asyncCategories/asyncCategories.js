import { loadCategories } from "../categoriesReducer/categoriesReducer";

export const asyncLoadCategories = async (dispatch) => {
  const response = await fetch("http://localhost:3333/categories/all");
  const data = await response.json();
  console.log(data);
  dispatch(loadCategories(data));
  
};
