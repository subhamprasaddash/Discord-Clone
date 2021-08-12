import React from "react";
import "./ChatBox.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

function ChatBox({ chat, timestamp }) {
  const user = useSelector(selectUser);
  return (
    <div className="chat-box">
      <Avatar src={user.photoURL} className="chat-box-avatar" />
      <div className="chat-box-info">
        <h4>
          {user.displayName}
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
