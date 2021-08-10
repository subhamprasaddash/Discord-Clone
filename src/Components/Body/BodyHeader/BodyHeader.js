import React from "react";
import "./BodyHeader.css";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function BodyHeader({ channelName }) {
  return (
    <div>
      <div className="body-header">
        <div className="body-channel-name">
          <h3>
            <span className="body-hashtag">#</span>YouTube{channelName}
          </h3>
        </div>
        <div className="body-header-icons">
          <NotificationsRoundedIcon htmlColor="gray" className="header-icons" />
          <PeopleAltRoundedIcon htmlColor="gray" className="header-icons" />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="search-input"
            />
            <SearchRoundedIcon
              htmlColor="gray"
              className="header-icons"
              fontSize="small"
            />
          </div>

          <InboxRoundedIcon htmlColor="gray" className="header-icons" />
          <HelpRoundedIcon htmlColor="gray" className="header-icons" />
        </div>
      </div>
    </div>
  );
}

export default BodyHeader;
