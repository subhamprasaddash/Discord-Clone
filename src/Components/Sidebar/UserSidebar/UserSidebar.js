import React from "react";
import "./UserSidebar.css";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";

function UserSidebar() {
  const user = useSelector(selectUser);

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
        <Avatar src={user.photo} />
        <div className="user-title">
          <h5>{user.name}</h5>
          <p>#{user.id.match(/\d/g).join("").substring(0, 5)}</p>
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
