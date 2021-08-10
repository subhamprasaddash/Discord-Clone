import React from "react";
import "./Body.css";
import BodyHeader from "./BodyHeader/BodyHeader";
import ChatBox from "./ChatBox/ChatBox";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifTwoToneIcon from "@material-ui/icons/GifTwoTone";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";

function Body({ channelName }) {
  return (
    <div className="body">
      <BodyHeader />

      <div className="body-chat-box">
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
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
            placeholder="Message #{channelName}"
          />
          <button className="submit-btn" type="submit"></button>
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
