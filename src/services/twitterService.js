const TWEET_API = 'https://node-tweeter.herokuapp.com/api/tweets';


export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
    .then(response => response.json())
    .then(tweets =>
        dispatch({
          type: 'fetch-all-tweets',
          tweets
        })
    );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
      method: 'POST',
      body: JSON.stringify(newTweet),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(tweet =>
        dispatch({
          type: 'create-tweet',
          tweet
        })
    );

export const deleteTweet = (dispatch, post) =>
    fetch(`${TWEET_API}/${post._id}`, {
      method: 'DELETE'
    }).then(response => dispatch({
      type: 'delete-tweet',
      post: post
    }));

export const likeTweet = (dispatch, post) =>
    fetch(`${TWEET_API}/${post._id}/like`, {
      method: 'PUT'
    })
    .then(response =>
        dispatch({
          type: 'like-tweet',
          post: post
        }));
