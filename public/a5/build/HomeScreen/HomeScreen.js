import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from '../PostList/index.js';

(function ($) {
  $('#wd-home').append(`
        <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
              ${NavigationSidebar('home')}
          </div>
          <div class="col-6">
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
            ${PostList()}
          </div>
          <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
          </div>
        </div>   
    `);
})($);



