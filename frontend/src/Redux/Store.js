import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { AppReducer } from "./AppReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["toggle"],
};

const reducers = combineReducers({
  App: AppReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let Store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default Store;
