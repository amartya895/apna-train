import {createSlice} from "@reduxjs/toolkit";

const trainDetailSlice = createSlice({
    name: 'trainDetail',
    initialState: {
        trains: [],
        trainno : [] ,
    },
    reducers: {
        addTrain: (state, action) => {
            state.trains.push(action.payload); 
        },
        getTrainNo:(state , action)=>{
            state.trainno=[];
            state.trainno.push(action.payload);
        }
        
    },
});


export const {addTrain , getTrainNo} = trainDetailSlice.actions;

export default trainDetailSlice.reducer;