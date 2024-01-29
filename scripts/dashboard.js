document.addEventListener("DOMContentLoaded", function() {
    // Get references to the sidebar items and corresponding content containers
    const dashboardLink = document.getElementById("dashboard");
    const addArticleLink = document.getElementById("add-article");
    const viewArticlesLink = document.getElementById("view-articles");
    const sidebar = document.getElementById("sidebar")
    const humburg  = document.getElementById("humburg")

    const dashboardCont = document.getElementById("dashboard-cont");
    const addArticleCont = document.getElementById("add-article-cont");
    const viewArticlesCont = document.getElementById("view-articles-cont");

    viewArticlesCont.style.display = "none"
    addArticleCont.style.display="none"

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
    const trans = document.querySelectorAll("#trash")
    const cancel = document.getElementById("cancel")
    const confirm = document.getElementById("confirm")
    const modal = document.getElementById("delete")

    trans.forEach(del => {
        del.addEventListener("click", () => {
            modal.style.display = "block"
        })
    })

    const actions = [cancel, confirm]
    
    actions.forEach(act => {
        act.addEventListener("click", () => {
            modal.style.display = "none"
        })
    })




});
