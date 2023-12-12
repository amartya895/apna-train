
import {configureStore} from "@reduxjs/toolkit"
import {persistReducer  , persistStore} from "redux-persist"
import trainDetailSlice from "./trainDetailSlice";
import storage from "redux-persist/lib/storage"; // This defaults to localStorage for web

const persistConfig = {
    
    key: "root", // you can change this to a unique key
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, trainDetailSlice);
  
  const store = configureStore({
    reducer: {
      trainDetail: persistedReducer,
    },
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };