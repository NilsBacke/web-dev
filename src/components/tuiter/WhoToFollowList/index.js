import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <span className="fw-bold">Who to follow</span>
      </li>
      {who.map((who) => (
        <WhoToFollowListItem who={who} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
