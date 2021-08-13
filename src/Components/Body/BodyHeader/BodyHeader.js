import React from "react";
import "./BodyHeader.css";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../../../firebase";

function BodyHeader({ textChannelName }) {
  return (
    <div>
      <div className="body-header">
        <div className="body-channel-name">
          <h3>
            <span className="body-hashtag">#</span>
            {textChannelName}
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
              // Add search bar functionality
            />
            <SearchRoundedIcon
              htmlColor="gray"
              className="header-icons"
              fontSize="small"
            />
          </div>

          <InboxRoundedIcon htmlColor="gray" className="header-icons" />
          <HelpRoundedIcon htmlColor="gray" className="header-icons" />
          <ExitToAppIcon
            htmlColor="gray"
            className="header-icons"
            onClick={() => auth.signOut()}
          />
        </div>
      </div>
    </div>
  );
}

export default BodyHeader;
