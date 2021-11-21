import posts from '../components/a8/Build/data/tweets.json';

const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'fetch-all-tweets':
      return action.tweets;

    case 'like-tweet':
      return state.map(tweet => {
        if(tweet._id === action.post._id) {
          if(tweet.liked) {
            tweet.liked = false;
            tweet.like--;
          } else {
            tweet.liked = true;
            tweet.like++;
          }
          return tweet;
        } else {
          return tweet;
        }
      });


    case 'delete-tweet':
      return state
      .filter(tweet => tweet._id !== action.post._id);


    case 'create-tweet':
      return ([
            action.tweet,
            ...state,
          ]
      );

    default:
      return(state);
  }
};

export default tweets;

