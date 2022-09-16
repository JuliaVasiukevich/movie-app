import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: null | string;
  isAuth: boolean;
  email: null | string;
  favorites: any[];
}

const initialState: UserState = {
  isAuth: false,
  id: null,
  email: null,
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true;
    },
    signOut(state) {
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;

export const { signIn, signOut } = userSlice.actions;
