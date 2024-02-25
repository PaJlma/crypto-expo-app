import { combineReducers } from "@reduxjs/toolkit";
import { cryptoService } from "store/services/crypto.service";

const rootReducer = combineReducers({
  [cryptoService.reducerPath]: cryptoService.reducer,
});

export default rootReducer;
