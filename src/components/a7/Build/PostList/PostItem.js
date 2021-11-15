import {useDispatch} from "react-redux";
import React from "react";

const PostItem = (
    {
        post = {
          "icon": "/images/elon.jpeg",
          "userName": "Elon Mask",
          "handle": "elonmusk",
          "time": "23h",
          "tweet": "Amazing show about @Inspiration4x mission!",
          "extra": {
            "image": "/images/inspiration4.jpeg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "url": "netflix.com"
          },
          "comment": "4.2k",
          "retweet": "3.5k",
          "like": "37.5k"
        }
    }
) => {
  const dispatch = useDispatch();

  const likeClickHandler = () => {
    dispatch({type: 'like-tweet', tweet: post});
  };

  const deleteTweetClickHandler = () => {
    dispatch({type: 'delete-tweet', wtf: post})
  };
  let extra = <></>;
  if (post.extra.url != null) {
    extra =
        <>
          <div className="wd-post-text">
            <p className="wd-post-text-color">
              {post.extra.title}
            </p>
            <div className="wd-color-lightgray">
              {post.extra.content}
            </div>
            <div className="wd-color-lightgray">
              <a href={`https://${post.extra.url}`}><i className="fa fa-link"></i> ${post.extra.url}</a>
            </div>
          </div>
        </>
    ;
  }
  return (
    <>
      <div className="list-group-item wd-background-black wd-top-margin">
        <div className="row">
          <div className="col-1">
            <img src={post.icon} className="wd-icon" alt={'icon'}/>
          </div>
          <div className="col-11">
            <div className="wd-padding-left">
              {post.userName} <i className="fas fa-check-circle"></i>
              <span className="wd-color-lightgray">{post.handle} - {post.time}</span>
              <i onClick={deleteTweetClickHandler}
                 className="fa fa-times-circle fa-pull-right"></i>

            </div>

            <i className="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
            <div className="wd-main-content mb-2 wd-padding-left">
              {post.tweet}
            </div>
            <img src={post.extra.image} className="wd-rounded-corners-pic" alt=""/>
            {extra}
            <div className="row wd-color-lightgray mt-2">
              <div className="col-3">
                <i className='far fa-comment wd-tweet-icon'></i> {post.comment}
              </div>
              <div className="col-3">
                <i className='fas fa-retweet wd-tweet-icon'></i> {post.retweet}
              </div>
              <div className="col-3">
                <div className="col"
                     onClick={likeClickHandler}>
                  {
                    post.liked && <i className="fas fa-heart me-2"
                                      style={{color: post.liked ? "red": "white"}}></i>
                  }
                  {
                    !post.liked && <i className="far fa-heart me-2"></i>
                  }
                  {post.like}
                </div>

              </div>
              <div className="col-3">
                <i className='fas fa-share wd-tweet-icon'></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
)
};
export default PostItem;