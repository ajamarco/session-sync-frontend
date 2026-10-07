import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/features/auth/authSlice";

// A factory rather than a singleton, so each request (on the server) and each
// browser session gets its own store. Register new feature reducers here.
export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
