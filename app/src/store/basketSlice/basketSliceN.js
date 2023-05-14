import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

// const getBasket = JSON.parse(localStorage.getItem("basket")) ?? [];
const getBasket = JSON.parse(localStorage.getItem("basket")) ?? [];

// const writeBasket = (basket) =>
//   localStorage.setItem("basket", JSON.stringify(basket));

const findId = (state, elem_id) => state.find((elem) => elem.id === elem_id);

// useEffect(() => {
//   const serializedState = JSON.stringify(mySlice.getState());
//   localStorage.setItem("mySlice", serializedState);
// }, [mySlice.getState]);

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("mySlice");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

export const basketSlice = createSlice({
  name: "basketProducts",
  initialState: { list: getBasket },
  reducers: {
    addProdukt: (state, action) => {
      const target = state.list.find((elem) => elem.id === action.payload);
      if (target === undefined) {
        state.list.push({ id: action.payload, count: 1 });

        // writeBasket(target);
      } else {
        target.count++;
        // writeBasket(target);
      }
    },
    incrementProdukt: (state, action) => {
      const target = state.list.find((elem) => elem.id === action.payload);
      target.count++;

      // writeBasket(target);
    },
    decrementProdukt: (state, action) => {
      const target = findId(state.list, action.payload);
      target.count--;
      // writeBasket(target);
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((elem) => elem.id !== action.payload);
      // writeBasket(state.list);
    },
  },
});
export const { addProdukt, incrementProdukt, decrementProdukt, deleteItem } =
  basketSlice.actions;
export default basketSlice.reducer;
