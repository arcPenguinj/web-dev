import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from '../PostList/index.js';
import "./home.css";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar current="home"/>
          </div>
          <div className="col-6" style={{"position": "relative"}}>
            <div><WhatsHappening/></div>
            <PostList/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <PostSummaryList title = "What's happening"/>
          </div>
        </div>

      </>
  )
};
export default HomeScreen;


