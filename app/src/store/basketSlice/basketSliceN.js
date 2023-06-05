import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const basketFetchPost = createAsyncThunk(
  "basketProducts/basketFetchPost",
  async (obj) => {
    const response = await fetch("http://localhost:3333/order/send", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json;charset-UTF-8" },
    });
  }
);

const getBasket = JSON.parse(localStorage.getItem("basket")) ?? [];

const findId = (state, elem_id) => state.find((elem) => elem.id === elem_id);

export const basketSlice = createSlice({
  name: "basketProducts",
  initialState: { list: getBasket },
  reducers: {
    addProdukt: (state, action) => {
      const target = state.list.find((elem) => elem.id === action.payload);
      if (target === undefined) {
        state.list.push({ id: action.payload, count: 1 });
      } else {
        target.count++;
      }
    },
    incrementProdukt: (state, action) => {
      const target = state.list.find((elem) => elem.id === action.payload);
      target.count++;
    },
    decrementProdukt: (state, action) => {
      const target = findId(state.list, action.payload);
      target.count--;
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((elem) => elem.id !== action.payload);
    },
    deleteAll: (state, action) => {
      state.list = [];
    },
  },
});
export const {
  addProdukt,
  incrementProdukt,
  decrementProdukt,
  deleteItem,
  deleteAll,
} = basketSlice.actions;
export default basketSlice.reducer;
