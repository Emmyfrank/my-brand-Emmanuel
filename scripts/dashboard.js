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
let retrivedArr = [];
   
retrivedArr = JSON.parse(localStorage.getItem("messages"))

    const messageCount = document.getElementById("messages-cont");


    const handleDeleteComment = (id) => {
    if (id) {
        retrivedArr.splice(id, 1)
        localStorage.setItem("messages", JSON.stringify(retrivedArr))
        window.location.reload();
       }   
    }

    messageCount.textContent = `${retrivedArr ? retrivedArr?.length : "0"  } Message(s)`;

    console.log("message container length:", retrivedArr.length);

    const html=`<div class="message">
                    <p>Emmanuel</p>
                    <p>i like your design </p>
                    <div>
                        <p>reply</p>
                        <p>delete</p>
                    </div>
                </div>`
    
    retrivedArr.map((mess , index) => {
         const id = delete-`${index}`;
        const html=`<div class="message">
                    <p><strong>Email:</strong> ${mess.email}</p>
                    <p><strong>Subject: </strong>${mess.subject} </p>
                    <p><strong>Message:</strong>${mess.message} </p>
                    <div>
                        <p><a href=mailto:${mess.email}>reply</a></p>
                        <p id="delete" data-id="${index}">delete</p>
                    </div>
                </div>`
        
        
       return messageContainer.insertAdjacentHTML("afterbegin", html)
    });

    const deleteButtons = document.querySelectorAll('#delete');
    deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const index = event.target.getAttribute('data-id');
        handleDeleteComment(index);
    });     
})
    
    
});

