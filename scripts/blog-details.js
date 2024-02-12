
const commentForm = document.getElementById("comment-form");
const singleComment = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const commentData = { content: singleComment.value };
    const retrivedComments = JSON.parse(localStorage.getItem("comments")) || [];
    
    retrivedComments.push(commentData);
    localStorage.setItem("comments", JSON.stringify(retrivedComments));

    commentForm.reset()

    //calling function to display comment as i submit form 
    displayComments(retrivedComments);
});

function displayComments(comments) {
    // Clear previous comments to prevent from looping over and over each comment
    commentsContainer.innerHTML = "";

    comments.forEach((comment, index) => {
        const html = `<div class="single-comment">
                        <img src="./images/nono2.jpg" alt="comment"/>
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

// counting comments
function refreshComments(messages){
    if("comments" in localStorage){
        let allcomments = JSON.parse(localStorage['comments']);
        document.getElementById("ncomments").innerHTML = allcomments.length;
    }timeout
}
setInterval(() => {
    refreshComments();
}, 1000);