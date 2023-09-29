import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    PNR: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10,
        minlength: 10
    },
    fromStation: {
        type: String,
        required: true
    },
    toStation: {
        type: String,
        required: true
    },
    dateOfJourney: {
        type: Date,
        required: true
    },
    travellers: [{
        
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender:{
            type:String,
            required:true,
        },
        berth:{
            type:String,
        },
        country : {
            type:String,
            default:"India",
        }
    }],
    email: {
        type: String,
        required: true
    },
    irctcId: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    }
}, {
    timestamps: true 
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;