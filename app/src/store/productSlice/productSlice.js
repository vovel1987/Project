import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  status: undefined,
  error: undefined,
  reducers: {
    filterPrice: (state, action) => {},
    filterCheck: (state, action) => {},
    sortSelect: (state, action) => {},
    inputFilter: (state, action) => {},
    resetState: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        (state.status = "resolve"), (state.list = payload);
      })
      .addCase(fetchProducts, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export const { filterPrice, filterCheck, sortSelect, inputFilter, resetState } =
  fetchProducts.actions;
export default fetchProducts.reducer;
