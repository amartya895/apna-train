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
    PNR: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10,
      minlength: 10,
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
          default: "India",
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
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
