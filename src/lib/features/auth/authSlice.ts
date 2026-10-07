import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Mock auth state: there is no real authentication yet.
type AuthUser = {
  name: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: AuthUser | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<AuthUser>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  selectors: {
    selectIsLoggedIn: (auth) => auth.isLoggedIn,
    selectUser: (auth) => auth.user,
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export const { selectIsLoggedIn, selectUser } = authSlice.selectors;
export default authSlice.reducer;
