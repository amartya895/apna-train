import mongoose from "mongoose";

const berthSchema = new mongoose.Schema(
  {
    seatNo: {
      type: Number,
      required: true,
    },
    seatType: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const ticketSchema = new mongoose.Schema(
  {
    userId:{
      type : String,
      required:true,
    },
    PNR: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10,
      minlength: 10,
    },
    train:{
      type: String,
      required: true,
    },
    fromStation: {
      type: String,
      required: true,
    },
    toStation: {
      type: String,
      required: true,
    },
    dateOfJourney: {
      type: Date,
      required: true,
    },
    travellers: [
      {
        id:{
          type:Number,
          required:true,
        },
        name: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        berth: [berthSchema],
      
        country: {
          type: String,
          required: true,
        },
      },
    ],
    email: {
      type: String,
      required: true,
    },
    irctcId: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    ticketFair: {
      type: Number,
      required: true,
    },
    startTime:{
      type:String,
      required:true,
    },
    endTime:{
      type:String,
      required:true
    },
    coachType:{
      type : String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
