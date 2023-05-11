import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getBasket = JSON.parse(localStorage.getItem("basket")) ?? [];

const writeBasket = (basket) =>
  localStorage.setItem("basket", JSON.stringify(basket));

const findId = (state, elem_id) => state.find((elem) => elem.id === elem_id);

export const basketSlice = createSlice({
  name: "basketProducts",
  initialState: { list: getBasket },
  reducers: {
    addProdukt: (state, action) => {
      const target = findId(state.list, action.payload);
      if (target === undefined) {
        const newState = [...state.list, { id: action.payload, count: 1 }];
        writeBasket(newState);
        return newState;
      } else {
        target.count++;
        writeBasket(state.list);
        return [...state.list];
      }
    },
    incrementProdukt: (state, action) => {
      const target = findId(state.list, action.payload);
      target.count--;

      writeBasket(state.list);

      return [...state.list];
    },
    decrementProdukt: (state, action) => {
      const target = findId(state.list, action.payload);
      target.count++;
      writeBasket(state.list);

      return [...state.list];
    },
    deleteItem: (state, action) => {
      const newTarget = state.list.filter((elem) => elem.id !== action.payload);
      writeBasket(newTarget);
      return newTarget;
    },
  },
});
export const { addProdukt, incrementProdukt, decrementProdukt, deleteItem } =
  basketSlice.actions;
export default basketSlice.reducer;
