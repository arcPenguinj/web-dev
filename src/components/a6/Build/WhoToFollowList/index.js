import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"

const WhoToFollowList = (
    {}) => {
  return (
      <>
            <ul className={"list-group"}>
              <li className={"list-group-item wd-background-slight-dark"}>
                Who to follow
              </li>
              {who.map(who => {
                return(
                    <WhoToFollowListItem who = {who}/>
                );
              })}
            </ul>
      </>
  );
}

export default WhoToFollowList;