import exploreItems from './post.js';
import PostSummaryItem from './PostSummaryItem.js';

const PostSummaryList = () => {
  return (`
    ${exploreItems.map(item => PostSummaryItem(item)).join('')}
  `);
};

export default PostSummaryList;