import React from "react";
import "./who-to-follow.css";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "/images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <img
          src={who.avatarIcon}
          className="img-fluid wd-image-size me-3 rounded-circle"
          alt=""
        />
        <div className="flex-grow-1">
          <div className="fw-bold mb-1">
            {who.userName}
            <i className="fa-solid fa-circle-check"></i>
          </div>
          @{who.handle}
        </div>
        <button type="button" className="btn btn-primary rounded-pill m-0">
          Follow
        </button>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
