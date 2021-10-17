import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
            <ul class="list-group">
              <li class="list-group-item wd-background-slight-dark ">
                Who to follow
              </li>
              ${who.map(w => WhoToFollowListItem(w)).join('')}
            </ul>
`);
}

export default WhoToFollowList;