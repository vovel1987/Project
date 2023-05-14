const ADD_PRODUKT = "ADD_PRODUKT";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DELETE = "DELETE";

// const getBasket = JSON.parse(localStorage.getItem("basket")) ?? [];

// const writeBasket = (basket) =>
//   localStorage.setItem("basket", JSON.stringify(basket));

// export const addProdukt = (id) => {
//   return {
//     type: ADD_PRODUKT,
//     payload: id,
//   };
// };

// export const incrementProdukt = (id) => {
//   return {
//     type: INCREMENT,
//     payload: id,
//   };
// };
// export const decrementProdukt = (id) => {
//   return {
//     type: DECREMENT,
//     payload: id,
//   };
// };
// export const deleteItem = (id) => {
//   return {
//     type: DELETE,
//     payload: id,
//   };
// };

// const findId = (state, elem_id) => state.find((elem) => elem.id === elem_id);

// export const basketReducer = (state = getBasket, action) => {
//   if (action.type === ADD_PRODUKT) {
//     const target = findId(state, action.payload);
//     if (target === undefined) {
//       const newState = [...state, { id: action.payload, count: 1 }];
//       writeBasket(newState);
//       return newState;
//     } else {
//       target.count++;
//       writeBasket(state);
//       return [...state];
//     }
//   } else if (action.type === DECREMENT) {
//     const target = findId(state, action.payload);
//     target.count--;

//     writeBasket(state);

//     return [...state];
//   } else if (action.type === INCREMENT) {
//     const target = findId(state, action.payload);
//     target.count++;
//     writeBasket(state);

//     return [...state];
//   } else if (action.type === DELETE) {
//     const newTarget = state.filter((elem) => elem.id !== action.payload);
//     writeBasket(newTarget);
//     return newTarget;
//   }

//   return state;
// };
