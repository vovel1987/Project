import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "fetchCateg/fetchCategories",
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    const data = await response.json();
    console.log(data);
    return data;
  }
);

// async (dispatch) => {
//   const response = await fetch("http://localhost:3333/categories/all");
//   const data = await response.json();
//   console.log(data);
//   dispatch(loadCategories(data));

export const catSlice = createSlice({
  name: "fetchCateg",
  initialState: {
    list: [],
    status: undefined,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "resolve";
        state.list=payload;
        
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

// export const {} = catSlice.actions;

export const categSlice= catSlice.reducer;
// export const categorySlice = createSlice({
//   name: "fetchCateg",
//   initialState: {
//     list: [],
//     status: undefined,
//     error: undefined,
//   },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCategories.fulfilled, (state, { payload }) => {
//         state.status = "resolve";
//         state.list = payload;
//       })
//       .addCase(fetchCategories.rejected, (state, { payload }) => {
//         state.status = "rejected";
//         state.error = payload;
//       });
//   },
// });
