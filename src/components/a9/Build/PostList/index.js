import React, {useEffect} from "react";
import PostItem from "./PostItem.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../../../services/twitterService";

const PostList = () => {
  const tweets = useSelector((state)=>state.tweets);
  const dispatch = useDispatch();
  useEffect(() => { fetchAllTweets(dispatch); }, [dispatch]);
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