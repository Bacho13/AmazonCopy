import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import categoriesReducer from "../redux/categoriesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
  },
});
