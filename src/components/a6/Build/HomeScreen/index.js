import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from '../PostList/index.js';
import "./home.css";

const HomeScreen = () => {
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar current="home"/>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-10">
                <div className="wd-search">
                  <span className="wd-search-icon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input className="rounded-pill search-bar" type="search" placeholder="Search Twitter" />
                </div>
              </div>
              <div className="col-2">
                <a href="#" className="wd-padding-left"><i className="fas fa-cog fa-2x"></i></a>
              </div>
            </div>
            <PostList/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <PostSummaryList/>
          </div>
        </div>
      </>
  )
};
export default HomeScreen;


