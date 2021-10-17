const PostItem = (post) => {
  let extra = '';
  if (post.extra.url != null) {
    extra = `
        <div class="wd-post-text">
            <p class="wd-post-text-color">
              ${post.extra.title}
            </p>
            <div class="wd-color-lightgray">
              ${post.extra.content}
            </div>  
            <div class="wd-color-lightgray">
              <a href="https://${post.extra.url}"><i class="fa fa-link"></i> ${post.extra.url}</a>
            </div>  
        </div>
    `;
  }
  return (`
  <div class="list-group-item wd-background-black wd-top-margin">
    <div class="row">
      <div class="col-1">
        <img src="${post.icon}" class="wd-icon">
      </div>
      <div class="col-11">
        <div class="wd-padding-left">
          ${post.userName} <i class="fas fa-check-circle"></i> 
          <span class="wd-color-lightgray">${post.handle} - ${post.time}</span>        
        </div>
        
        <i class="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
        <div class="wd-main-content mb-2 wd-padding-left">
          ${post.tweet}
        </div>
        <img src="${post.extra.image}" class="wd-rounded-corners-pic">
        ${extra}
        <div class="row wd-color-lightgray mt-2">
          <div class="col-3">
            <i class='far fa-comment wd-tweet-icon'></i> ${post.comment}
          </div>
          <div class="col-3">
            <i class='fas fa-retweet wd-tweet-icon'></i> ${post.retweet}
          </div>
          <div class="col-3">
            <i class='far fa-heart wd-tweet-icon'></i> ${post.like}
          </div>
          <div class="col-3">
            <i class='fas fa-share wd-tweet-icon'></i>
          </div>
        </div>

      </div>
    </div>
  </div>
  `)
};

export default PostItem;