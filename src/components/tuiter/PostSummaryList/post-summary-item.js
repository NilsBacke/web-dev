import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <div className="p-2 row flex-nowrap m-0">
      <div className="col-9 col-md-10 h6 small">
        <div className="text-muted mb-1">{post.topic}</div>
        <div className="fw-bold mb-1">
          {post.userName}
          <i className="fa-solid fa-circle-check"></i>
          <span className="text-muted"> - {post.time}</span>
        </div>
        <div className="fw-bold">{post.title}</div>
      </div>
      <div className="col-3 col-md-2 my-auto">
        <img src={post.image} className="img-fluid" />
      </div>
    </div>
  );
};

export default PostSummaryItem;
