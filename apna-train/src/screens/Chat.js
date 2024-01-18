import React, { useEffect, useState } from 'react';
import axios from "axios";

const Chat = () => {

  const userId = JSON.parse(localStorage.getItem("currentUser")).user?._id;
  console.log(userId)

  const [chats , setChats] = useState([]);

  const getChats = async()=>{
    const {data} = await axios.get(`https://apna-train-service.onrender.com/api/chat/${userId}`);

    setChats(data);
  }

  useEffect(()=>{
      getChats();
  },[userId]);

  return (
    <div className='flex'>
      <div className="w-1/5 h-screen bg-orange-200">
        <h1 className='text-center'>Conversation</h1>
      </div>
      <div className="w-4/5 h-screen bg-gray-300"></div>
    </div>
  )
}

export default Chat
