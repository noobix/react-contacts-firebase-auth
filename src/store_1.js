import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import ContactReducer from './Reducers/ContactReducer'
import AuthReducer from './Reducers/authReducer'
import config from './firebase/config'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'

const Reducers = combineReducers({contacts: ContactReducer, auth: AuthReducer})
const persistConfig = {key: "root", storage}
const persistedReducer = persistReducer(persistConfig, Reducers)
const store = createStore(persistedReducer, compose(applyMiddleware
        (thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(config), reduxFirestore(config)
    )
  );
  const persistor = persistStore(store)
export {store, persistor}