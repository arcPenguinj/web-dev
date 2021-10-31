import React from "react";
import posts from "./post.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
  return (
      <>
    {posts.map(post => {
      return(
          <PostSummaryItem post = {post}/>
      );
    })}
      </>
  );
}
export default PostSummaryList;