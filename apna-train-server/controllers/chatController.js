import Chat from "../models/chatModel.js";

export const createChat = async (req, res) => {
  const {senderId , receiverId} = req.body;
  const newChat = new Chat({
    members : [senderId , receiverId]
  });
  
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChat = async (req, res) => {
  try {
    const chat = await Chat.find({
      member: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: {
        $all: [
          { $elemMatch: { $eq: req.params.firstId } },
          { $elemMatch: { $eq: req.params.secondId } },
        ],
      },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ error, message: "find chat error" });
  }
};


