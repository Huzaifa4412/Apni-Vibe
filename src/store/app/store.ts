import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    timeout: 10000,
}

const rootReducer = combineReducers({
    cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const makeStore = () => configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;