const CATEGORIES_LOAD = "CATEGORIES_LOAD ";
const categories =[]

export const loadCategories = (payload) => ({
  type: CATEGORIES_LOAD,
  payload,
});


export const categoriesReducer = (state = categories, action) => {
  if (action.type === CATEGORIES_LOAD) {
    return action.payload;
  }

  return state;
};
