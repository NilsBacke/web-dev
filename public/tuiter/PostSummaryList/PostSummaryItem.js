const PostSummaryItem = (post) => {
  return `<div class="p-2 row flex-nowrap m-0">
    <div class="col-9 col-md-10 h6 small">
      <div class="text-muted mb-1">${post.topic}</div>
      <div class="fw-bold mb-1">
        ${post.userName}
        <i class="fa-solid fa-circle-check"></i>
        <span class="text-muted"> - ${post.time}</span>
      </div>
      <div class="fw-bold">
        ${post.title}
      </div>
    </div>
    <div class="col-3 col-md-2 my-auto">
      <img src="${post.image}" class="img-fluid" />
    </div>
  </div>`;
};

export default PostSummaryItem;
