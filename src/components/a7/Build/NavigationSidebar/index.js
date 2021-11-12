import React from "react";
import {Link} from "react-router-dom";
import "../ExploreScreen/explore.css";

const NavigationSidebar = (
    {
      current = 'explore'
    }) => {
  return(
      <>
          <div className="list-group">
            <Link to="/a7/"><i className="fab fa-twitter fa-2x"></i></Link>
            <Link to="/a7/twitter/home" className={`list-group-item ${current === 'home' ? 'active' : ''}`}><i className="fa fa-home"></i><span className="d-none d-xl-inline">Home</span></Link>
            <Link to="/a7/twitter/explore" className={`list-group-item ${current === 'explore' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Explore</span></Link>
            <Link to="/a7/twitter/notifications" className={`list-group-item ${current === 'notifications' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Notifications</span></Link>
            <Link to="/a7/twitter/messages" className={`list-group-item ${current === 'messages' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Messages</span></Link>
            <Link to="/a7/twitter/bookmarks" className={`list-group-item ${current === 'bookmarks' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Bookmarks</span></Link>
            <Link to="/a7/twitter/lists" className={`list-group-item ${current === 'lists' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Lists</span></Link>
            <Link to="/a7/twitter/profile" className={`list-group-item ${current === 'profile' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">Profile</span></Link>
            <Link to="/a7/twitter/more" className={`list-group-item ${current === 'more' ? 'active' : ''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline">More</span></Link>

          </div>
          <div className="d-grid mt-2">
              <button
                  className="btn btn-primary rounded-pill w-100 mt-2">
                  Tweet</button>
          </div>
      </>
  );
}
export default NavigationSidebar;
