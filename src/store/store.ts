import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: { movies: moviesReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
