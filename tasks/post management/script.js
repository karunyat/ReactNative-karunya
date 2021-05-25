const pmTableContainer = document.querySelector(".title-container");
let postPopup = document.getElementById("postPopup");
let postInfo = document.querySelector(".post");
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

const renderPostTitles = function (data) {
  for (const [i, posts] of data.entries()) {
    const html = `<p><button class="eachtitle"  > TITLE:${posts.title}</button> </p>
      `;

    pmTableContainer.insertAdjacentHTML("beforeend", html);
  }
  let viewPost = document.querySelectorAll(".eachtitle");
  for (let i = 0; i < viewPost.length; i++) {
    viewPost[i].addEventListener("click", function (postId) {
      postId.preventDefault();

      viewPostInfo(data[i]);
      postPopup.style.display = "block";
    });
  }
};
const viewPostInfo = function (postId) {
  let htmlData = `
  <span class="close">&times;</span>
      <p class="post__row"><span>Title</span> ${postId.title}</p>
       <p class="post__row"><span>Post</span>${postId.body}</p>
             <p class="post__row"><span>Username</span>${postId.userId}</p>
              `;
  postInfo.insertAdjacentHTML("afterbegin", htmlData);
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function (x) {
    postPopup.style.display = "none";
    x.preventDefault();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      postPopup.style.display = "none";
    }
  };
};
