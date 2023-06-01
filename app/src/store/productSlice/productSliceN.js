import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();

    const newData = data.map((elem) => {
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

    return newData;
  }
);

export const fetchPost = createAsyncThunk("products/fetchPost", async (obj) => {
  const response = await fetch("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  const data = await response.json();
  console.log(data);
});



export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: undefined,
    error: undefined,
  },

  reducers: {
    // filterPrice: (state, action) => {
    //   state.list = state.list.map((elem) => ({ ...elem, showDisc: true }));
    //   console.log(state.list);
    //   state.list = state.list.map((elem) => {
    //     if (
    //       !(elem.discont_price === null
    //         ? elem.price >= action.payload.min &&
    //           elem.price <= action.payload.max
    //         : elem.discont_price >= action.payload.min &&
    //           elem.discont_price <= action.payload.max)
    //     ) {
    //       return { ...elem, showDisc: false };
    //     } else {
    //       return { ...elem, showDisc: true };
    //     }
    //   });
    // },

    filterPrice: (state, action) => {
      const priceFrom = action.payload.min;
      const priceTo = action.payload.max === "" ? Infinity : action.payload.max;

      state.list = state.list.map((elem) => ({
        ...elem,
        showDisc: true,
        priceShow: true,
      }));

      state.list = state.list.map((elem) => {
        if (
          !(elem.discont_price === null
            ? elem.price >= priceFrom && elem.price <= priceTo
            : elem.discont_price >= priceFrom && elem.discont_price <= priceTo)
        ) {
          return { ...elem, showDisc: false };
        } else {
          return { ...elem, showDisc: true };
        }
      });

    },

    filterCheck: (state, action) => {
      state.list = state.list.map((elem) => ({ ...elem, show: true }));

      if (action.payload) {
        // return   state.list.map((elem) => {

        const value = state.list.map((elem) => {
          if (elem.discont_price === null) {
            elem.show = false;
          }
          return elem;
        });
        state.list = value;
      } else {
        const value = state.list.map((elem) => ({ ...elem, show: true }));
        state.list = value;
        // return state.list.map((elem) => ({ ...elem, show: true }));
      }
    },
    sortSelect: (state, action) => {
      state.list = [...state.list].sort((a, b) => {
        if (action.payload === 1) {
          return a.discount - b.discount;
        } else if (action.payload === -1) {
          return b.discount - a.discount;
        } else if(action.payload ===0) {
          return a.id-b.id;
        }
      });
    },
    inputFilter: (state, action) => {
      state.list = state.list.map((elem) => ({ ...elem, show: true }));
      state.list = state.list.map((elem) => ({
        ...elem,
        show: elem.title.toLowerCase().startsWith(action.payload.toLowerCase()),
      }));
    },
    resetState: (state, action) => {
      state.list = state.list.map((elem) => ({
        ...elem,
        show: true,
        showDisc: true,
      }));
      console.log(state.list);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "resolve";
        state.list = payload;
      })
      .addCase(fetchProducts, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export const { filterPrice, filterCheck, sortSelect, inputFilter, resetState } =
  productSlice.actions;
export default productSlice.reducer;
