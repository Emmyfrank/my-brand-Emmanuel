
let article;
const articleId = (window.location.href.split('?'))[1];
document.addEventListener("DOMContentLoaded", async function () {
    await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${articleId}`)
        .then(async (response) => {
            const responseData = await response.json();
            if (response.status === 200) {
                article = responseData.deta;
                const container = document.getElementById("blog-details");
                container.innerHTML = `<div class="blog-header">
        <img src=${article.image} alt="blog image" />
        <div>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        </div>
    </div>
    <!-- likes and comments icons and counters -->
    <div class="interactions">
     <!-- thise are likes and their counter -->
        <div class="int">
            <img id="likeButton" src="./images/svg/social/heart-solid.svg" alt="comments"/>
            <p id="numLikes">${article.likes.length}</p>
        </div>
       <!-- thise are coments and their counter -->
        <div class="int">
            <img src="./images/svg/social/comment-solid.svg" alt="comments"/>
            <p id="ncomments">${article.comments.length}</p>
        </div>

    </div>
    `

                const commentsContain = document.getElementById("comments");
                article.comments.forEach((comment) => {
                    const commentDiv = document.createElement("div");
                    commentDiv.className = "single-comment";
                    commentDiv.id = "comm";
                    commentDiv.innerHTML = `
    <img src="./images/comment icon.jpg" alt="comment"/>
    <div>
        <div class="user">${comment.user.username}</div>
        <div>${new Date(comment.createdAt).toDateString()}</div>
        <div>${comment.comment}</div>
    </div> 
    `
                    commentsContain.appendChild(commentDiv);
                })
            }
        })

const likeButton = document.getElementById("likeButton");
likeButton.addEventListener("click", async()=>{
    const response = await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${articleId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await response.json();
    if(response.status === 200){
        const likeDiv = document.getElementById("numLikes");
        likeDiv.textContent = data.likes.length;
    }

})
})

const commentForm = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments");
commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const singleComment = document.getElementById("comment").value;
    const commentBtn = document.getElementById("comment-btn");
    commentBtn.textContent = "Processing...";
    commentBtn.attributes.disabled = true;

    const response = await fetch('https://backend-ctov.onrender.com/api/v1/comments', {
        method: "POST",
        body: JSON.stringify({ articleId: articleId, comment: singleComment }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await response.json();
    if (response.status === 201) {
        comment = data.comment;
        const comCount = document.getElementById("ncomments");
        comCount.textContent = data.commentCounter;
        displayComments([comment]);
        commentForm.reset();
        commentBtn.textContent = "Comment";
        commentBtn.attributes.disabled = false;
    }
});

function displayComments(comments) {
    comments.forEach((comment) => {
        const html = `<div class="single-comment">
                        <img src="./images/nono2.jpg" alt="comment"/>
                        <div>
                        <div class="user">${comment.user.username}</div>
                        <div>${new Date(comment.createdAt).toDateString()}</div>
                        <div>${comment.comment}</div>
                        </div>         
                    </div>`;
        commentsContainer.insertAdjacentHTML("afterbegin", html);
    });
};



