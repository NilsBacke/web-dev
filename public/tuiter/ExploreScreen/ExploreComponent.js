import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
  <div class="col-9 col-lg-7 col-xl-6 col-xxl-5 gx-2">
            <div class="d-flex justify-content-between align-items-center">
            <div
              class="col-11 d-flex align-items-center border rounded-pill ps-2 p-1 bg-white"
            >
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="border-0 ms-3 w-100 wd-search-input"
                placeholder="Search Twitter"
              />
            </div>
            <a href="explore_settings.html" class="me-1">
              <i class="fa-solid fa-gear fs-4"></i>
            </a>
          </div>
          <ul class="nav nav-tabs my-2">
          <li class="nav-item">
            <a class="nav-link active" href="for_you.html">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
          </li>
          <li class="nav-item d-none d-md-inline">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>
        <div class="position-relative">
            <img src="../spacex.jpeg" class="img-fluid w-100" />
            <span
              class="position-absolute text-white fs-4 fw-bold start-0 bottom-0 p-2"
              >SpaceX's Starship</span
            >
          </div>
           ${PostSummaryList()}
           </div>
    `;
};
export default ExploreComponent;
