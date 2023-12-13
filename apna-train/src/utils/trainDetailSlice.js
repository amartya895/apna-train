import { createSlice } from "@reduxjs/toolkit";

const trainDetailSlice = createSlice({
  name: "trainDetail",
  initialState: {
    trains: [],
    trainno: [],
    journeyStations: [],
    trainsBetween:[],
  },
  reducers: {
    addTrain: (state, action) => {
      state.trains = [];
      state.trains.push(action.payload);
    },
    getTrainNo: (state, action) => {
      state.trainno = [];
      state.trainno.push(action.payload);
    },
    addTrainReview: (state, action) => {
      state.trains[0].reviews[0].userReviews.push(action.payload);
    },
    getJourneyStation: (state, action) => {
      state.journeyStations.push(action.payload);
    },
    getTrainBetweenStation:(state,action)=>{
      state.trainsBetween=[];
      state.trainsBetween.push(action.payload);
    }
  },
});

export const { addTrain, getTrainNo, addTrainReview, getJourneyStation,getTrainBetweenStation } =
  trainDetailSlice.actions;

export default trainDetailSlice.reducer;
