const WhoToFollowListItem = (who) => {
  return `<li class="list-group-item">
  <div class="d-flex align-items-center">
    <img
      src="${who.avatarIcon}"
      class="img-fluid wd-image-size me-3 rounded-circle"
    />
    <div class="flex-grow-1">
      <div class="fw-bold mb-1">
        ${who.userName}
        <i class="fa-solid fa-circle-check"></i>
      </div>
      @${who.handle}
    </div>
    <button type="button" class="btn btn-primary rounded-pill m-0">
      Follow
    </button>
  </div>
  </li>`;
};

export default WhoToFollowListItem;
