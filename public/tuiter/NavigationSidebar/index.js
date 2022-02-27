const NavigationSidebar = () => {
  return `
            <div class="list-group">
                <a class="list-group-item" href="/">
                <i class="fa-brands fa-twitter"></i></a>
            </div>
            <a href="home.html" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-house"></i>
              <span class="d-none d-xl-inline">Home</span>
            </a>
            <a
              href="explore.html"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <i class="fa-solid fa-hashtag"></i>
              <div class="d-none d-xl-inline">Explore</div>
            </a>
            <a
              href="notifications.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fa-solid fa-bell"></i>
              <div class="d-none d-xl-inline">Notifications</div>
            </a>
            <a
              href="messages.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fa-solid fa-envelope"></i>
              <div class="d-none d-xl-inline">Messages</div>
            </a>
            <a
              href="bookmarks.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fa-solid fa-bookmark"></i>
              <div class="d-none d-xl-inline">Bookmarks</div>
            </a>
            <a href="lists.html" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-list"></i>
              <div class="d-none d-xl-inline">Lists</div>
            </a>
            <a
              href="profile.html"
              class="list-group-item list-group-item-action"
            >
              <i class="fa-solid fa-user"></i>
              <div class="d-none d-xl-inline">Profile</div>
            </a>
            <a href="more.html" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-ellipsis"></i>
              <div class="d-none d-xl-inline">More</div>
            </a>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `;
};
export default NavigationSidebar;
