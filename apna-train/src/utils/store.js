
import {configureStore} from "@reduxjs/toolkit"
import trainDetailSlice from "./trainDetailSlice";
const store = configureStore({
    reducer: {
        trainDetail: trainDetailSlice, // Use the correct reducer name here
    },
});

export default store;