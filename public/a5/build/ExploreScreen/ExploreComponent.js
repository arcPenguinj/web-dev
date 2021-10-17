import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
          <div class="row">
            <div class="col-10">
              <div class="wd-search">
                <span class="wd-search-icon">
                  <i class="fa fa-search"></i>
                </span>
                <input class="rounded-pill search-bar" type="search" placeholder="Search Twitter" />
              </div>
            </div>
            <div class="col-2">
              <a href="#" class="wd-padding-left"><i class="fas fa-cog fa-2x"></i></a>
            </div>
          </div>
          <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
          </ul>
          <div class="list-group">
            <div class="list-group-item">
              <img src="../images/starship.jpeg" alt="start ship" class="wd-full-width-height">
              <h5 class="wd-title">SpaceX's StarShip</h5>
            </div>
            ${PostSummaryList()}    
          </div>
    `);
}
export default ExploreComponent;
