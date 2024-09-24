import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import dataSlice from "./dataSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const combinePersist = combineReducers({
 form: dataSlice
});
const register = persistReducer(persistConfig, combinePersist);

const rootReducer = combineReducers({
  register,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export let persistor = persistStore(store);
