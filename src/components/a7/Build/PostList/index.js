import React from "react";
import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";


const PostList = () => {
  const tweets = useSelector((state)=>state.tweets);
  return(
      <ul className="list-group">
        {
          tweets.map(post =>
              <PostItem post={post}/>
          )
        }
      </ul>
  )
};

export default PostList;