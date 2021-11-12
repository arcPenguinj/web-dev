import posts from '../components/a7/Build/data/tweets.json';

const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'like-tweet':
      return state.map(tweet => {
        if(tweet._id === action.tweet._id) {
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
      break;

    case 'delete-tweet':
      return state
      .filter(tweet => tweet._id !== action.tweet._id);
      break;

    case 'create-tweet':
      const tweet = {
        _id: (new Date()).getTime() + '',
        // "topic": "Web Development",
        "userName": "ReactJS",
        // "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "tweet": action.tweet,
        "icon": "/images/elon.jpeg",
        // "logo-image": "../../../images/react-blue.png",
        "comment": 123,
        "retweet": 234,
        "like": 345,
        "liked": false,
        "extra": {
          "image": "/images/starship.jpeg"
        },
      };
      return ([
            tweet,
            ...state,
          ]
      );
      break;
    default:
      return(state);
  }
};

export default tweets;

