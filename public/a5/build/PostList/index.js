import PostItem from "./PostItem.js";
import tweets from "./tweets.js";

const PostList = () => {
  return (`
    ${tweets.map(tweet => PostItem(tweet)).join('')}
  `);
}
export default PostList;