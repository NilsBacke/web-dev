import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";

export default function TuitListItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: "delete-tuit", tuit });
  };

  return (
    <div className="wd-post wd-border-bottom">
      <img
        src={tuit["logo-image"]}
        className="wd-avatar"
        width="48"
        height="48"
        alt=""
      />
      <div className="wd-post-container">
        <div className="wd-post-title-row">
          <span className="wd-post-author">
            {tuit.postedBy.username}
            <span className="wd-post-handle">@{tuit.handle}</span>
          </span>
          <i
            onClick={() => deleteTuit(tuit)}
            className="fas fa-remove fa-2x 
                  fa-pull-right"
          ></i>
        </div>
        <div className="wd-post-content">{tuit.tuit}</div>
        <img
          className="wd-post-image"
          width="504"
          height="264"
          src={tuit.attachments?.image ?? ""}
          alt=""
        />
        <div className="wd-post-image-caption-container">
          <div className="wd-post-image-caption-title">{tuit.title}</div>
          <div className="wd-post-image-caption-subtitle">{tuit.title}</div>
          <div className="wd-post-image-caption-subtitle">rt.com</div>
        </div>
        <div className="wd-actions-row">
          <a href="/explore" className="wd-action-link">
            <span className="wd-action">
              <i className="fa-regular fa-comment wd-margin-right"></i>
              {tuit.stats.comments}
            </span>
          </a>
          <a href="/explore" className="wd-action-link">
            <span className="wd-action">
              <i className="fa-solid fa-retweet wd-margin-right"></i>9
            </span>
          </a>
          <TuitStats tuit={tuit} />
          <a href="/explore" className="wd-action-link">
            <span className="wd-action">
              <i className="fa-solid fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
