import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (
    {}
) => {
  return(
      <>
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
          <ul className="nav mb-2 nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">For you</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">Trending</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">Sports</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">Entertainment</a>
            </li>
          </ul>
          <div className="list-group">
            <div className="list-group-item">
              <img src="/images/starship.jpeg" alt="start ship" className="wd-full-width-height"/>
              <h5 className="wd-title">SpaceX's StarShip</h5>
            </div>
            <PostSummaryList/>
          </div>
      </>
  );
}
export default ExploreComponent;
