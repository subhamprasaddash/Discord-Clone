import React, { useState, useEffect } from "react";
import "./Body.css";
import BodyHeader from "./BodyHeader/BodyHeader";
import ChatBox from "./ChatBox/ChatBox";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifTwoToneIcon from "@material-ui/icons/GifTwoTone";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import { useSelector } from "react-redux";
import {
  selecttextChannelId,
  selecttextChannelName,
} from "../../features/appSlice";
import firebase from "firebase";
import db from "../../firebase";
import { selectUser } from "../../features/userSlice";

function Body() {
  const user = useSelector(selectUser);
  const textChannelId = useSelector(selecttextChannelId);
  const textChannelName = useSelector(selecttextChannelName);

  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (textChannelId) {
      db.collection("textChannels")
        .doc(textChannelId)
        .collection("chats")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setChats(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [textChannelId]);

  const sendInput = (event) => {
    event.preventDefault();
    db.collection("textChannels").doc(textChannelId).collection("chats").add({
      chat: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });
    setInput("");
  };

  return (
    <div className="body">
      <BodyHeader textChannelName={textChannelName} />

      <div className="body-chat-box">
        {chats.map((chat) => {
          return (
            <ChatBox
              chat={chat.chat}
              timestamp={chat.timestamp}
              user={chat.user}
            />
          );
        })}
      </div>
      <div className="message-box">
        <AddCircleIcon
          fontSize="small"
          htmlColor="gray"
          className="message-icons"
        />
        <form className="message-form">
          <input
            className="text-input"
            type="text"
            placeholder={`Message # ${textChannelName}`}
            disabled={!textChannelName}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="submit-btn"
            type="submit"
            disabled={!textChannelName}
            onClick={sendInput}
          ></button>
        </form>

        <GifTwoToneIcon
          fontSize="large"
          htmlColor="gray"
          className="message-icons"
        />
        <CardGiftcardOutlinedIcon
          fontSize="small"
          htmlColor="gray"
          className="message-icons"
        />
        <EmojiEmotionsIcon
          fontSize="small"
          htmlColor="gray"
          className="message-icons"
        />
      </div>
    </div>
  );
}

export default Body;
