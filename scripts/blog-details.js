// const blogDetailsForm = document.getElementById("blog-form-detais");
// const blogdetailtext = document.getElementById("blogDetais-text");
// const errormessagess = document.getElementById("errorerror");

// blogDetailsForm.addEventListener("submit", (e) => {
//     // e.preventDefault();
//     const value = blogdetailtext.value.trim()
    
//     if (value === "") {
//         alert("fail")
//     } else {
//         const allComments = JSON.parse(localStorage.getItem("comments")) || []
//         allComments.push(value)

//         localStorage.setItem("comments",JSON.stringify(allComments))

//     }
    
// })

// const allComments = JSON.parse(localStorage.getItem("comments"))
// const commentsContainer = document.getElementById("comments")


// allComments.map(comm => {
//     const html = `<div class="single-comment" id="comm">
//                 <img src="./images/nono2.jpg" alt="comment"/>
//                 <div>
//                     <div class="user">Dodos</div>
//                     <div>23rd jan 2023</div>
//                     <div>${comm} </div>
//                 </div>        
//             </div>`
    
//     return commentsContainer.insertAdjacentHTML("afterbegin",html)
    
    
// })

// const blogContainer = document.getElementById("blogs-container")

// const allArticles = JSON.parse(localStorage.getItem("articles"))

// console.log("blog container",blogContainer)



// allArticles.map(comm => {
//     const single=`<a href="#" class="blog">
//                         <img src="./images/nono1.jpg" alt="blog image"/>
//                         <h4>${comm.title}</h4>
//                         <div class="blog-des">
//                             <p>12 nov 2023</p>
//                             <p>@Emmy</p>
//                         </div>
//                     </a>`
    
//     return blogContainer.insertAdjacentHTML("afterbegin",single)
    
// })