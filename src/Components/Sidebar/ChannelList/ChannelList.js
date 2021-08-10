import React from "react";
import "./ChannelList.css";

function ChannelList({ id, channelName }) {
  return (
    <div className="channel-list">
      <h5>
        <span className="channel-list-hashtag">#</span>YouTube{channelName}
      </h5>
    </div>
  );
}

export default ChannelList;
