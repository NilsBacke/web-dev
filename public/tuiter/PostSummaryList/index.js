import PostSummaryItem from "./PostSummaryItem.js";
import items from "./posts.js";

const PostSummaryList = () => {
  return items.map((i) => PostSummaryItem(i)).join("");
};

export default PostSummaryList;
