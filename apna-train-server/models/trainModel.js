import mongoose from "mongoose";

const seatAvailabilitySchema = mongoose.Schema({
    SL : Boolean,
    AC1 : Boolean,
    AC2 : Boolean,
    AC3 : Boolean
},{
    _id : false
})

const userReviewSchema = mongoose.Schema({
        userName : {
            type : String,
            required: true,
            
        },
        dateOfReview : {
            type : Date,
            require : true,
            default : Date.now
        },
        comment : {
            type : String,
            default : "nice",
        },
        rating : {
            type : Number , 
            default : 3,
        }

},{
    _id : false
})

const reviewSchema = mongoose.Schema({

    punctuality : {
        type : Number,
        default: 3,
    },
    cleanliness : {
        type: Number,
        default : 4,
    },
    food : {
        type: Number,
        default : 3,
    },

    userReviews : [userReviewSchema]



},{
    _id:false
})

const trainSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  liveStatus: {
    type: String,
    required: true,
  },
  startStation: {
    type: String,
    required: true,
  },
  endStation: {
    type: String,
    required: true,
  },
  reviews:[reviewSchema],
  seatAvailability : [seatAvailabilitySchema],
  totalReview : Number,
  overallRating : Number
});

const Train = mongoose.model('Trains' ,trainSchema );

export default Train;
