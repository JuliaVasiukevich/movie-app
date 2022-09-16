import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";

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
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        state.email = user.email;
        state.id = user.uid;
      }
    },
    logOut(state) {
      state.isAuth = false;
      const auth = getAuth();
      signOut(auth);
    },
  },
});

export default userSlice.reducer;

export const { signIn, logOut } = userSlice.actions;
