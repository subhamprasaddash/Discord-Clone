import React from "react";
import "./ChatBox.css";
import { Avatar } from "@material-ui/core";

function ChatBox() {
  return (
    <div className="chat-box">
      <Avatar
        src="https://cdna.artstation.com/p/assets/images/images/029/888/414/large/joshua-cheng-d.jpg?1598947378"
        className="chat-box-avatar"
      />
      <div className="chat-box-info">
        <h4>
          Username
          <span className="timestamp">timestamp</span>
        </h4>
        <p>Message</p>
      </div>
    </div>
  );
}

export default ChatBox;
