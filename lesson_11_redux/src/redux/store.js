import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { counter } from "./counter/counterReducer";
import { todo } from "./todo/todoReducer";

const rootReducer = combineReducers({
  counter,
  todo
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
