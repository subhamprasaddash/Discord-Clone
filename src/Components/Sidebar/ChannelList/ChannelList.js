import React from "react";
import "./ChannelList.css";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import db from "../../../firebase";
import { useDispatch } from "react-redux";
import { setTextChannelInfo } from "../../../features/appSlice";

function ChannelList({ textId, textChannelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="channel-list"
      onClick={() =>
        dispatch(
          setTextChannelInfo({
            textChannelId: textId,
            textChannelName: textChannelName,
          })
        )
      }
    >
      <h5>
        <span className="channel-list-hashtag">#</span>
        {textChannelName}
      </h5>
      {/* <DeleteOutlineIcon 
        fontSize="small"
        htmlColor="gray"
        className="channel-list-delete"
        onClick={deleteTextChannel}
      /> */}
    </div>
  );
}

export default ChannelList;
