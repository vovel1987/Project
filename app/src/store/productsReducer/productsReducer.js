import { useSelector } from "react-redux";

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const FILTER_PRICE = "FILTER_PRICE";
const FILTER_CHECK = "FILTER_CHECK ";
const FILTER_SELECT = "FILTER_SELECT";
const FILTER_INPUT = "FILTER_INPUT";
const RESET = "RESET";

export const loadProducts = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const filterPrice = (payload) => ({
  type: FILTER_PRICE,
  payload,
});

export const filterCheck = (payload) => ({
  type: FILTER_CHECK,
  payload,
});

export const sortSelect = (payload) => ({
  type: FILTER_SELECT,
  payload,
});

export const inputFilter = (payload) => ({
  type: FILTER_INPUT,
  payload,
});

export const resetState = () => ({
  type: RESET,
});

// ({
//   ...elem,
//   show: true,
//   showDisc: true,
// });
export const productsReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload.map((elem) => {
      if (elem.discont_price === null) {
        return {
          ...elem,
          show: true,
          showDisc: true,
          discount: elem.price,
        };
      } else {
        return {
          ...elem,
          show: true,
          showDisc: true,
          discount: elem.discont_price,
        };
      }
    });
  } else if (action.type === FILTER_PRICE) {
    // state = state.map((elem) => ({ ...elem, showPrice: true }));

    return state.map((elem) => {
      state = state.map((elem) => ({ ...elem, showDisc: true }));
      if (
        !(elem.discont_price === null
          ? elem.price >= action.payload.min && elem.price <= action.payload.max
          : elem.discont_price >= action.payload.min &&
            elem.discont_price <= action.payload.max)
      ) {
        return { ...elem, showDisc: false };
      } else {
        return { ...elem, showDisc: true };
      }
    });
  } else if (action.type === FILTER_CHECK) {
    state = state.map((elem) => ({ ...elem, show: true }));
    if (action.payload) {
      return state.map((elem) => {
        if (elem.discont_price === null) {
          elem.show = false;
        }
        return elem;
      });
    } else {
      return state.map((elem) => ({ ...elem, show: true }));
    }
  } else if (action.type === FILTER_SELECT) {
    return [...state].sort((a, b) => {
      if (action.payload === 1) {
        return a.discount - b.discount;
      } else if (action.payload === -1) {
        return b.discount - a.discount;
      } else {
        return [...state];
      }
    });
  } else if (action.type === FILTER_INPUT) {
    state = state.map((elem) => ({ ...elem, show: true }));
    return state.map((elem) => ({
      ...elem,
      show: elem.title.toLowerCase().startsWith(action.payload.toLowerCase()),
    }));
  } else if (action.type === RESET) {
    return state.map((elem) => ({
      ...elem,
      show: true,
      showDisc: true,
    }));
  }

  return state;
};

// if (action.payload) {
//   return state.map((elem) => {
//     if (!elem.sales) {
//       elem.show = false;
//     }
//     return elem;
//   });
// } else {
//   return state.map((elem) => ({ ...elem, show: true }));
// }
