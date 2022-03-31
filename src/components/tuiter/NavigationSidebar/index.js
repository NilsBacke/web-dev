import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "../../../vendors/bootstrap/css/bootstrap.min.css";
// import "../../../vendors/fontawesome/css/all.min.css";

const NavigationSidebar = () => {
  const location = useLocation();
  let active = "";

  console.log(location.pathname);
  if (location.pathname === "/tuiter" || location.pathname === "/tuiter/") {
    active = "home";
  } else if (
    location.pathname === "/tuiter/explore" ||
    location.pathname === "/tuiter/explore/"
  ) {
    active = "explore";
  }

  return (
    <>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <Link
        to="/tuiter"
        className={`list-group-item list-group-item-action
        ${active === "home" ? "active" : ""}`}
      >
        <i className="fa-solid fa-house"></i>
        <span className="d-none d-xl-inline">Home</span>
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item list-group-item-action
        ${active === "explore" ? "active" : ""}`}
        aria-current="true"
      >
        <i className="fa-solid fa-hashtag"></i>
        <div className="d-none d-xl-inline">Explore</div>
      </Link>
      <a
        href="notifications.html"
        className={`list-group-item list-group-item-action
        ${active === "home" ? "notifications" : ""}`}
      >
        <i className="fa-solid fa-bell"></i>
        <div className="d-none d-xl-inline">Notifications</div>
      </a>
      <a
        href="messages.html"
        className={`list-group-item list-group-item-action
        ${active === "messages" ? "active" : ""}`}
      >
        <i className="fa-solid fa-envelope"></i>
        <div className="d-none d-xl-inline">Messages</div>
      </a>
      <a
        href="bookmarks.html"
        className={`list-group-item list-group-item-action
        ${active === "bookmarks" ? "active" : ""}`}
      >
        <i className="fa-solid fa-bookmark"></i>
        <div className="d-none d-xl-inline">Bookmarks</div>
      </a>
      <a
        href="lists.html"
        className={`list-group-item list-group-item-action
        ${active === "lists" ? "active" : ""}`}
      >
        <i className="fa-solid fa-list"></i>
        <div className="d-none d-xl-inline">Lists</div>
      </a>
      <a
        href="profile.html"
        className={`list-group-item list-group-item-action
        ${active === "profile" ? "active" : ""}`}
      >
        <i className="fa-solid fa-user"></i>
        <div className="d-none d-xl-inline">Profile</div>
      </a>
      <a
        href="more.html"
        className={`list-group-item list-group-item-action
        ${active === "more" ? "active" : ""}`}
      >
        <i className="fa-solid fa-ellipsis"></i>
        <div className="d-none d-xl-inline">More</div>
      </a>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
