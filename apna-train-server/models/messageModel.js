import mongoose from "mongoose";

const messageSchema = mongoose.Schema({

    chatId:{
        type:String
    },
    senderId:{
        type:String,
    },
    message : {
        type :String
    }
},{
    timestamps: true,
});

const Message = mongoose.model("Messages" , messageSchema);

export default Message;
