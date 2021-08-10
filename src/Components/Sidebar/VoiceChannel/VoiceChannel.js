import React from "react";
import "./VoiceChannel.css";
import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";

function VoiceChannel({ voiceChannelName }) {
  return (
    <div className="voice-channel">
      <h5>
        <SpeakerPhoneIcon fontSize="small" className="voice-icon" />
        Voice {voiceChannelName}
      </h5>
    </div>
  );
}

export default VoiceChannel;
