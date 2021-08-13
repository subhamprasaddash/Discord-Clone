import React from "react";
import "./ChatBox.css";
import { Avatar } from "@material-ui/core";

function ChatBox({ chat, user, timestamp }) {
  return (
    <div className="chat-box">
      <Avatar src={user.photo} className="chat-box-avatar" />
      <div className="chat-box-info">
        <h4>
          {user.name}
          <span className="timestamp">
            {new Date(timestamp?.toDate()).toString().substring(0, 25)}
          </span>
        </h4>
        <p>{chat}</p>
      </div>
    </div>
  );
}

export default ChatBox;
