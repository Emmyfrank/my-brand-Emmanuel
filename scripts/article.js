const articleForm = document.getElementById("article-form");
const articleTitle = document.getElementById("article-title");
const articleImage = document.getElementById("article-image");
const articleDesc = document.getElementById("article-desc");
const articleCount = document.getElementById("article-count");
const articleHD = document.getElementById("article-holder");
const deleteConfirmation= document.getElementById("delete");
const cancelButton = document.getElementById("cancel");
const confirmationButton = document.getElementById("confirm");
const tableBody = document.getElementById("table-body")

const onFileChange=(e)=>{
    if(e.target.files){

        const nunu= new FileReader()

        nunu.readAsDataURL(e.target.files[0])

        nunu.onload = (e)=>{ 
            articleImage.src = e.target.result
        }

    }
}

articleImage.addEventListener("change",onFileChange)

articleForm.addEventListener("submit", (e) => {

// e.preventDefault()
    const articleData = { title: articleTitle.value, image: articleImage.src, discription: articleDesc.value };

    console.log(articleData)


    if(!articleTitle.value || !articleImage.value || !articleDesc.value){
        alert("all field are require")
        return
    }
    //getting aricle sfrom local storage
    const retrivedArr = JSON.parse(localStorage.getItem("articles")) || [];

    retrivedArr.push(articleData);
// saving aricles to locastorage
    localStorage.setItem("articles", JSON.stringify(retrivedArr));

    //clearing form
    articleForm.reset();

    
    updateArticleCount();
});

//getting articles from local storage
const retrivedArr = JSON.parse(localStorage.getItem("articles")) || [];
updateArticleCount();

//function to update our counter
function updateArticleCount() {
    articleCount.textContent = `${retrivedArr.length} articles`;
}

//looping through all aricles
retrivedArr.forEach((article, index) => {

    const id = delete-`${index}`;

    const html2=`<div class="blog">
    <img src=${article.image} alt="blog image">
    <div class="blog-detail">
        <div class="article-title">${article.title}</div>
        <div class="blog-action">
            <button id = "${id}">delete</button>
            <button>edit</button>
        </div>
    </div>
</div>`
    
    const html = `<div class="article">
                        <p style="width:20%;margin-right:5px"> ${article.title}</p>
                        <p style="width:20%;margin-right:5px"> ${article.image}</p>
                        <p style="width:30%;margin-right:5px;flex:1"> ${article.discription}</p>
                        <div style="width:10%" style="dislay:flex">
                            <button><img src="./pen-to-square-solid (1).svg"  class="action-svg" alt="img"/></button>
                            <button><img src="./dashbord-logon/bin.png" class="action-svg" id = "${id}" /></button>
                        </div>
                    </div>`;
                 
                  
    //adding each article to article conatiner
    articleHD.insertAdjacentHTML("afterbegin", html2);

    //adding event listen to trash icon to trigger delet article
    const deleteButton = document.getElementById(id);

    deleteButton.addEventListener("click", () => {
        
        deleteConfirmation.style.display = "block";
 
        confirmationButton.addEventListener("click", () => {
            retrivedArr.splice(index, 1);
            localStorage.setItem("articles", JSON.stringify(retrivedArr));
            window.location.reload(); //reloding window object to reflect change once article is deletde
            deleteConfirmation.style.display = "none";
        })
        cancelButton.addEventListener("click", () => {
            deleteConfirmation.style.display = "none";
        })
       
    });
})