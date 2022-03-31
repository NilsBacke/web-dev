import React from "react";
import PostSummaryItem from "./post-summary-item";
import items from "./posts.json";

const PostSummaryList = () => {
  return items.map((item) => <PostSummaryItem post={item} />);
};

export default PostSummaryList;
