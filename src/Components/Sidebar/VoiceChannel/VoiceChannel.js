import React from "react";
import "./VoiceChannel.css";
import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";
import { useDispatch } from "react-redux";
import { setVoiceChannelInfo } from "../../../features/appSlice";

function VoiceChannel({ voiceId, voiceChannelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="voice-channel"
      onClick={() =>
        dispatch(
          setVoiceChannelInfo({
            voiceChannelId: voiceId,
            voiceChannelName: voiceChannelName,
          })
        )
      }
    >
      <h5>
        <SpeakerPhoneIcon fontSize="small" className="voice-icon" />
        {voiceChannelName}
      </h5>
    </div>
  );
}

export default VoiceChannel;
