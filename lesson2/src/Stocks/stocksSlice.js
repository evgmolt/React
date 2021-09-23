import { createSlice } from "@reduxjs/toolkit";

export const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    loading: false,
    error: false,
    data: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = stocksSlice.actions;

export default stocksSlice.reducer;