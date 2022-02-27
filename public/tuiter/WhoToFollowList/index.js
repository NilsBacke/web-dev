import items from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
            <ul class="list-group">
                <li class="list-group-item">
                <span class="fw-bold">Who to follow</span>
                </li>
                ${items.map((i) => WhoToFollowListItem(i)).join("")}
            </ul>
`;
};

export default WhoToFollowList;
