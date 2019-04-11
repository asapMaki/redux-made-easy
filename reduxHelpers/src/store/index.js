import {rootReducer}            from "./reducers";
import {createLogger}           from "redux-logger";
import {applyMiddleware, createStore}   from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage                          from 'redux-persist/es/storage';
import thunk                            from 'redux-thunk';

const persistConfig = {
    timeout:null,
    key      : 'root',
    storage,
    blacklist: [
       "modal"
    ],
    // whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger({
    // ...options
});
let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

export let store     = createStore(persistedReducer, applyMiddleware(...middleware));
export let persistor = persistStore(store);