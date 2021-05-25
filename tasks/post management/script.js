const pmTableContainer = document.querySelector(".title-container");
// const postInfo = document.querySelector(".post");
const postInfo = document.getElementById("post");
let enabeDisableviewPostModal = (option) => {
  const viewPostModal = document.getElementById("post");
  viewPostModal.className = `${option}-modal`;
};
const renderPostTitles = function (data) {
  for (const [i, posts] of data.entries()) {
    const html = `<div class="title-row" ><p><button class="eachtitle"  > TITLE:${posts.title}</button> </p>
    </div>`;

    pmTableContainer.insertAdjacentHTML("beforeend", html);
    // pmTableContainer.getElementsByClassName.opacity = 1;
  }
  const viewPost = document.querySelectorAll(".eachtitle");
  for (let i = 0; i < viewPost.length; i++) {
    viewPost[i].addEventListener("click", function (postId) {
      postId.preventDefault();
      viewPostInfo(data[i]);
    });
  }
};

const viewPostInfo = function (postId) {
  const htmlData = `<p class="post__row"><span>Title</span> ${postId.title}</p>
   <p class="post__row"><span>Post</span>${postId.body}</p>
         <p class="post__row"><span>Username</span>${postId.userId}</p>
         <button class="viewPostCloseBtn" >close</button>
         
         `;
  postInfo.insertAdjacentHTML("beforeend", htmlData);
  const viewPostCloseBtn = document.querySelector(".viewPostCloseBtn");
  viewPostCloseBtn.addEventListener("click", () => {
    enabeDisableviewPostModal("disable");
  });

  // postInfo.getElementsByClassName.opacity = 1;
};

const getPostData = function () {
  fetch(`db.json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // console.log(json.posts);
      return renderPostTitles(json.posts);
    });
};
getPostData();
