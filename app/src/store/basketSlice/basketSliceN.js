import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";


export const basketFetchPost = createAsyncThunk(
  "basketProducts/basketFetchPost", async(obj) =>{
    const response = await fetch('http://localhost:3333/order/send',{
       method:'POST',
       body:JSON.stringify(obj),
       headers:{ 'Content-type':'application/json;charset-UTF-8' }
    })
    const data = await response.json()
    console.log(data);
  }
)






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
