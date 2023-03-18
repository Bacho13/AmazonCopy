import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
