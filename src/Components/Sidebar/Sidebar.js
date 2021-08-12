import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import ChannelList from "./ChannelList/ChannelList";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import VoiceChannel from "./VoiceChannel/VoiceChannel";
import UserSidebar from "./UserSidebar/UserSidebar";
import db from "../../firebase";

function Sidebar() {
  const [textChannels, settextChannels] = useState([]);
  const [voiceChannels, setvoiceChannels] = useState([]);

  useEffect(() => {
    db.collection("textChannels")
      .orderBy("textChannelName", "asc")
      .onSnapshot((snapshot) => {
        settextChannels(
          snapshot.docs.map((doc) => ({
            textId: doc.id,
            textChannel: doc.data(),
          }))
        );
      });
  }, []);
  useEffect(() => {
    db.collection("voiceChannels")
      .orderBy("voiceChannelName", "asc")
      .onSnapshot((snapshot) => {
        setvoiceChannels(
          snapshot.docs.map((doc) => ({
            voiceId: doc.id,
            voiceChannel: doc.data(),
          }))
        );
      });
  }, []);

  const addTextChannel = () => {
    const textChannelName = prompt("Enter new text channel name");

    if (textChannelName) {
      db.collection("textChannels").add({
        textChannelName: textChannelName,
      });
    }
  };

  const addVoiceChannel = () => {
    const voiceChannelName = prompt("Enter new voice channel name");

    if (voiceChannelName) {
      db.collection("voiceChannels").add({
        voiceChannelName: voiceChannelName,
      });
    }
  };

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
          <AddIcon className="channel-add-icon" onClick={addTextChannel} />
        </div>
        <div className="channel-list-sidebar">
          {textChannels.map(({ textId, textChannel }) => {
            return (
              <ChannelList
                key={textId}
                textId={textId}
                textChannelName={textChannel.textChannelName}
              />
            );
          })}
        </div>
        <div className="channel">
          <div className="channel-header">
            <ExpandMore fontSize="small" />
            <h6>VOICE CHANNELS</h6>
          </div>
          <AddIcon className="channel-add-icon" onClick={addVoiceChannel} />
        </div>
        <div className="channel-list-sidebar">
          {voiceChannels.map(({ voiceId, voiceChannel }) => {
            return (
              <VoiceChannel
                key={voiceId}
                voiceId={voiceId}
                voiceChannelName={voiceChannel.voiceChannelName}
              />
            );
          })}
        </div>
      </div>
      <div className="sidebar-user">
        <UserSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
