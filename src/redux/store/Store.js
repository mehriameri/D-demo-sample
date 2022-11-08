import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from "./indexReducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userInfo', 'shoppingBasketInfo']
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const Store = createStore(persistedReducer, applyMiddleware(thunk));

export default Store;