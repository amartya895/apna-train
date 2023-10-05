import {createSlice} from "@reduxjs/toolkit";

const trainDetailSlice = createSlice({
    name: 'trainDetail',
    initialState: {
        trains: [], // Initialize 'items' as an empty array
    },
    reducers: {
        addTrain: (state, action) => {
            state.trains.push(action.payload); // Access 'items' property
        },
    },
});


export const {addTrain} = trainDetailSlice.actions;

export default trainDetailSlice.reducer;