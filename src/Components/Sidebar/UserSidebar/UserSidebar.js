import React from "react";
import "./UserSidebar.css";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import { Avatar } from "@material-ui/core";

function UserSidebar({ userId, userName, avatarUrl }) {
  const [mic, setMic] = React.useState(false);
  const toggleMic = () => {
    if (mic) {
      setMic(false);
    } else {
      setMic(true);
    }
  };
  return (
    <div className="user">
      <div className="user-detail">
        <Avatar src="https://cdna.artstation.com/p/assets/images/images/029/888/414/large/joshua-cheng-d.jpg?1598947378" />
        <div className="user-title">
          <h5>Chunchunmaru{userName}</h5>
          <p>#8131{userId}</p>
        </div>
      </div>
      <div className="user-icons">
        <div className="mic-icon" onClick={() => toggleMic()}>
          {mic ? (
            <MicIcon htmlColor="gray" fontSize="small" />
          ) : (
            <MicOffIcon htmlColor="gray" fontSize="small" />
          )}
        </div>
        <HeadsetIcon htmlColor="gray" fontSize="small" className="defan-icon" />
      </div>
    </div>
  );
}

export default UserSidebar;
