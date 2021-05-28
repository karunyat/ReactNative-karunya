//Elements
const pmContainer = document.querySelector(".container");
let pmpostcontainer = document.querySelector(".postpopup");
const createBtn = document.querySelector(".createBtn");
const newPostModal = document.getElementById("newPost");

//getting data from json
const getPostData = function () {
  fetch(`http://localhost:3000/posts `)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // console.log(json.posts);
      return renderPostTitles(json);
    });
};
getPostData();

//function: title buttons
const renderPostTitles = function (data) {
  for (const [i, posts] of data.entries()) {
    const html = `<p><button class="eachtitle"  > TITLE:${posts.title}</button> </p>`;
    pmContainer.insertAdjacentHTML("beforeend", html);
  }
  //Elements
  let viewPost = document.querySelectorAll(".eachtitle");
  for (let i = 0; i < viewPost.length; i++) {
    viewPost[i].addEventListener("click", function (postId) {
      postId.preventDefault();
      viewPostInfo(data[i]);
      pmpostcontainer.style.display = "block";
    });
  }
};

//function: getting details of corresponding titles
const viewPostInfo = function (postId) {
  let htmlData = `<div class="postpopup">
        <button class="close">X </button>
        <p class="post__row"><span ></span> <b>${postId.title}</b></p>
         <p class="post__row"><span></span> ${postId.body}</p>
               <p class="post__row"><span>UserId</span>: ${postId.userId}</p>
               </div>
               `;

  pmContainer.insertAdjacentHTML("afterbegin", htmlData);
  //Elements
  pmpostcontainer = document.querySelector(".postpopup");
  let closeBtn = document.querySelectorAll(".close");

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      pmpostcontainer.style.display = "none";
    });
  }
};

//create event handler
createBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let modalhtml = `<div class="newPost">
  <form class="form form--create"
  <label for="newPostTitle">Title</label>

      <textarea
         id="newPostTitle"
        class="form__input form__input--title"
        placeholder="Your Title.."
        style="height: 50px"
      ></textarea>
      <p id="invalidinputs" style="color:red"></p>

      <label for="newPostBody">Post</label>

      <textarea
        id="newPostBody"
        class="form__input form__input--body"
        placeholder="Write something.."
        style="height: 100px"
      ></textarea>
      <p id="invalidinputs" style="color:red"></p>
      <label for="newPostUsername"
      >UserId</label>

      <input type="number" id="newPostUsername" placeholder="UserId" class="form__input form__input--userName"  min="1" max="10" />
      <p id="invaliduserName" style="color:red"></p>
      <button id="newPostCloseBtn">Close</button>
      <button id="newPostCeateBtn">Create</button>
      </form>
      </div>`;
  newPostModal.insertAdjacentHTML("afterbegin", modalhtml);
  newPostModal.style.display = "block";
  //Elements
  let newPostCloseBtn = document.getElementById("newPostCloseBtn");
  const inputCreateTitle = document.querySelector(".form__input--title");
  const inputCreateBody = document.querySelector(".form__input--body");
  const inputCreateuserName = document.querySelector(".form__input--userName");
  let newPostCreateBtn = document.getElementById("newPostCeateBtn");
  let newPost = document.querySelector(".newPost");
  //closeBtn event handler
  newPostCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newPost.style.display = "none";
  });
  //CreateBtn event handler
  newPostCreateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const title = String(inputCreateTitle.value);
    const body = String(inputCreateBody.value);
    const userName = String(inputCreateuserName.value);
    let text;
    if (title == null || body == null) {
      alert("please fill the input fields");
    } else if (userName > 10) {
      text = "invalid userId \n only (1-10) userId's avaliable";
      document.getElementById("invaliduserName").innerHTML = text;
    } else {
      const createPost = function () {
        fetch(`http://localhost:3000/posts`, {
          method: "POST",
          body: JSON.stringify({
            title: `${title}`,
            body: `${body}`,
            userId: `${userName}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      };
      createPost();
    }
  });
});
