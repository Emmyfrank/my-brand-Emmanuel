
let article;
document.addEventListener("DOMContentLoaded", async function() {
    const articleId = (window.location.href.split('?'))[1];
    await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${articleId}`)
    .then(async(response)=>{
        const responseData = await response.json();
        if(response.status === 200){
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
            <img src="./images/svg/social/heart-solid.svg" alt="comments"/>
            <p>${article.likes.length}</p>
        </div>
       <!-- thise are coments and their counter -->
        <div class="int">
            <img src="./images/svg/social/comment-solid.svg" alt="comments"/>
            <p id="ncomments">${article.comments.length}</p>
        </div>

    </div>
<div class="comments" id="comments"></div>
    <form id="comment-form">
    <input class="hidden" id="id-input" value=${article._id}/>
        <textarea id="comment" >

        </textarea>
        <div class="subcontainer">
        <button type="submit"id="comment-btn">Comment</button>
        <p id="errorerror"></p>
        </div>
    </form>`

    const commentsContain = document.getElementById("comments");
article.comments.forEach((comment)=>{
    const commentDiv = document.createElement("div");
    commentDiv.className = "single-comment";
    commentDiv.id = "comm";
    commentDiv.innerHTML = `
    <img src="./images/nono2.jpg" alt="comment"/>
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
})


const commentForm = document.getElementById("comment-form");
const singleComment = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");
const id = document.getElementById("id-input").value;
commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const commentData = { content: singleComment.value };
    const response = await fetch('https://backend-ctov.onrender.com/api/v1/comments',{
        method: "POST",
        body:JSON.stringify({articleId: id, comment: singleComment.value}),
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
    // const retrivedComments = JSON.parse(localStorage.getItem("comments")) || [];
    
    // retrivedComments.push(commentData);
    // localStorage.setItem("comments", JSON.stringify(retrivedComments));

    location.reload();

    //calling function to display comment as i submit form 
    displayComments(retrivedComments);
});

function displayComments(comments) {
    // Clear previous comments to prevent from looping over and over each comment
    commentsContainer.innerHTML = "";

    comments.forEach((comment, index) => {
        const html = `<div class="single-comment">
                        <img src="./images/nono2.jpg\" alt="comment"/>
                        <div>
                            <div class="user">Comment.</div>
                            <div>${comment.content}</div>
                            <div>Fr 2024</div>
                        </div>        
                    </div>`;
        commentsContainer.insertAdjacentHTML("afterbegin", html);
    });
}

//getting stored comment from local storage 
const retrivedComments = JSON.parse(localStorage.getItem("comments")) || [];
displayComments(retrivedComments);

// // counting comments
function refreshComments(messages){
    if("comments" in localStorage){
        let allcomments = JSON.parse(localStorage['comments']);
        document.getElementById("ncomments").innerHTML = allcomments.length;
    }timeout
}
setInterval(() => {
    refreshComments();
}, 1000);



