import React from "react";
import "./Sidebar.css";
import ChannelList from "./ChannelList/ChannelList";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import VoiceChannel from "./VoiceChannel/VoiceChannel";
import UserSidebar from "./UserSidebar/UserSidebar";

function Sidebar({
  channelName,
  voiceChannelName,
  userId,
  userName,
  avatarUrl,
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <img
            src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
            alt="img"
            className="logo"
          />
          <h3>Cafe-lite</h3>
        </div>
        <ExpandMore />
      </div>
      <div className="channel-sidebar">
        <div className="channel">
          <div className="channel-header">
            <ExpandMore fontSize="small" />
            <h6>TEXT CHANNELS</h6>
          </div>
          <AddIcon className="channel-add-icon" />
        </div>
        <div className="channel-list-sidebar">
          <ChannelList />
          <ChannelList />
          <ChannelList />
          <ChannelList />
          <ChannelList />
        </div>
        <div className="channel">
          <div className="channel-header">
            <ExpandMore fontSize="small" />
            <h6>VOICE CHANNELS</h6>
          </div>
          <AddIcon className="channel-add-icon" />
        </div>
        <div className="channel-list-sidebar">
          <VoiceChannel />
          <VoiceChannel />
        </div>
      </div>
      <div className="sidebar-user">
        <UserSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
