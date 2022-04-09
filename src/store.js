import { createStore, combineReducers } from "redux";
import ContactReducer from "./Reducers/ContactReducer";
import AuthReducer from "./Reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: AuthReducer,
  contacts: ContactReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
