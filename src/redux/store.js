import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig ={
    key:"root",
    storage
}




export const store = configureStore({
    reducer:{
        cart:persistReducer(persistConfig,cartReducer)
    }
})

export const persistor = persistStore(store);