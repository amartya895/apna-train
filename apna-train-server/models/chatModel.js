import mongoose from "mongoose";

const chatSchema = mongoose.Schema({

    members : []

},{
    
    timestamps: true,
});


const Chat = mongoose.model("Chats" , chatSchema);

export default Chat