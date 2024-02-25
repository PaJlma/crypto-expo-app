import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { cryptoService } from "./services/crypto.service";
import { initBookmarked } from "./slices/bookmarkedSlice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoService.middleware),
});

store.dispatch(initBookmarked());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
