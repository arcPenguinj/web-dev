import PostItem from "./PostItem.js";
import posts from "./post.json";

const PostList = () => {
  return(
      <>
        {posts.map(post => {
          return(
              <PostItem post={post}/>
          )
        })}
      </>
  )
}
export default PostList;