document.addEventListener("DOMContentLoaded", function() {
    // Get references to the sidebar items and corresponding content containers
    const dashboardLink = document.getElementById("dashboard");
    const addArticleLink = document.getElementById("add-article");
    const viewArticlesLink = document.getElementById("view-articles");
    const sidebar = document.getElementById("sidebar")
    const humburg = document.getElementById("humburg")
    const messageContainer = document.getElementById("message-conatiner")

    const dashboardCont = document.getElementById("dashboard-cont");
    const addArticleCont = document.getElementById("add-article-cont");
    const viewArticlesCont = document.getElementById("view-articles-cont");

    viewArticlesCont.style.display = "none"
    addArticleCont.style.display="none"

    //aticle sectiosn



    // Function to show a specific content container, hide others, and add active class to the clicked link
    function showContent(contentToShow, linkToActivate) {
        const allContents = [dashboardCont, addArticleCont, viewArticlesCont];
        const allLinks = [dashboardLink, addArticleLink, viewArticlesLink];
        if (window.innerWidth <= 790) {
             sidebar.style.display="none"
         }

        console.log("inner width",window.innerWidth)

        allContents.forEach(content => {
            if (content === contentToShow) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });

        allLinks.forEach(link => {
            if (link === linkToActivate) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Add click event listeners to the sidebar items
    dashboardLink.addEventListener("click", function() {
        showContent(dashboardCont, dashboardLink);
        
    });

    addArticleLink.addEventListener("click", function() {
        showContent(addArticleCont, addArticleLink);
        
    });

    viewArticlesLink.addEventListener("click", function() {
        showContent(viewArticlesCont, viewArticlesLink);
 
    });

    //adding event listenr to humburg to toggle sidebar visibilit
    humburg.addEventListener("click", () => {
        if (window.innerWidth <= 790) {
           sidebar.style.display="block"
       }
   })
    

    //delete modal js
   
const retrivedArr = JSON.parse(localStorage.getItem("myArray"))

    const messageCount = document.getElementById("messages-cont");

    messageCount.textContent = `${retrivedArr?.length} Message(s)`;

    console.log("message container length:", retrivedArr.length);

    const html=`<div class="message">
                    <p>Emmanuel</p>
                    <p>i like your design </p>
                    <div>
                        <p>reply</p>
                        <p>delete</p>
                    </div>
                </div>`
    
    retrivedArr.map(mess => {
        const html=`<div class="message">
                    <p>${mess.email}</p>
                    <p>${mess.message} </p>
                    <div>
                        <p>reply</p>
                        <p>delete</p>
                    </div>
                </div>`
        
              return messageContainer.insertAdjacentHTML("afterbegin",html)
        
    })
    
    // messageContainer.insertAdjacentHTML("afterbegin",html)
    // messageContainer.insertAdjacentHTML("afterbegin",html)



    //add article to local stoarge

//     articleForm.addEventListener("submit", (e) => {
//         e.preventDefault()
//         const newArticle = { title: articleTitle.value, description: articleDesc.value,image:articleImage.value }

//         const articleConatiner = JSON.parse(localStorage.getItem("articles")) || []

//         articleConatiner.push(newArticle)

//         localStorage.setItem("articles", JSON.stringify(articleConatiner))
        
//         console.log("new article",newArticle)

//     })

//     const articles = JSON.parse(localStorage.getItem("articles"))
//     articleCount.textContent = `${articles.length} articles`
    



//     // defining article container div
// const ownContainer = document.getElementById("article-holder");

//     //looping throuh all articles and create tem-late html for each articl
// articles.forEach((article,index) => {
//     const htmlTemplate = `<div class="article">
//                     <p>${article.title}</p>
//                     <div>
//                         <button><img src="./pen-to-square-solid (1).svg" class="action-svg"/></button>
//                         <button id="article-to-delete"><img src="./trash-solid.svg" id="trash" class="action-svg"/></button>
//                     </div>
//                 </div>`;
    
//     //inserting or appending that html templae above to article container
//     ownContainer.insertAdjacentHTML("afterbegin", htmlTemplate);
// });
    
//     //showing numver of comments to user
//     const commentCount = document.getElementById("comment-count")

//     const allComments = JSON.parse(localStorage.getItem("comments"))

//     commentCount.textContent = `${allComments.length} comments`
    

//     //rendering 


    
    
});

