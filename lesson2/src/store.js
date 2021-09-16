import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatReducer from "./Chat/chatSlice";
import stocksReducer from "./Stocks/stocksSlice";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["stocks", "chat"],
};

const reducers = combineReducers({ chat: chatReducer, stocks: stocksReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});