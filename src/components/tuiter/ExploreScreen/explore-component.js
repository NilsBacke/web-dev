import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-11 d-flex align-items-center border rounded-pill ps-2 p-1 bg-white">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="border-0 ms-3 w-100 wd-search-input"
            placeholder="Search Twitter"
          />
        </div>
        <a href="explore_settings.html" className="me-1">
          <i className="fa-solid fa-gear fs-4"></i>
        </a>
      </div>
      <ul className="nav nav-tabs my-2">
        <li className="nav-item">
          <a className="nav-link active" href="for_you.html">
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">
            Sports
          </a>
        </li>
        <li className="nav-item d-none d-md-inline">
          <a className="nav-link" href="entertainment.html">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="position-relative">
        <img src="/images/spacex.jpeg" className="img-fluid w-100" />
        <span className="position-absolute text-white fs-4 fw-bold start-0 bottom-0 p-2">
          SpaceX's Starship
        </span>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
