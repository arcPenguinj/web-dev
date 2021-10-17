const getNavClass = (current, link) => {
  return current === link ? 'wd-background-slight-dark-active' : 'wd-background-slight-dark';
}

const NavigationSidebar = (current) => {
  return(`
            <div class="list-group">
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                <!-- continue the rest of the list -->
                <a href="../HomeScreen/home.html" class="list-group-item ${getNavClass(current, 'home')}"><i class="fa fa-home"></i> Home</a>
                <a href="../ExploreScreen/explore.html" class="list-group-item ${getNavClass(current, 'explore')}"><i class="fa fa-hashtag"></i> Explore</a>
                <a href="#" class="list-group-item ${getNavClass(current, 'notifiations')}"><i class="fa fa-bell"></i> Notifications</a>
                <a href="#" class="list-group-item ${getNavClass(current, 'messages')}"><i class="fa fa-envelope"></i> Messages</a>
                <a href="#" class="list-group-item ${getNavClass(current, 'bookmarks')}"><i class="fa fa-bookmark"></i> Bookmarks</a>
                <a href="#" class="list-group-item ${getNavClass(current, 'lists')}"><i class="fa fa-list"></i> Lists</a>
                <a href="#" class="list-group-item ${getNavClass(current, 'profile')}"><i class="fa fa-user"></i> Profile</a>
                <a class="list-group-item ${getNavClass(current, 'more')}" href = "#"><i class="fa fa-ellipsis-h"></i>More</a>
            </div>
            <div class="d-grid mt-2">
                <button
                   class="btn btn-primary rounded-pill w-100 mt-2">
                    Tweet</button>
            </div>
    `);
}
export default NavigationSidebar;
