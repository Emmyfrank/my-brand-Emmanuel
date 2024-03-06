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
let articles = [];

let image;

const onFileChange=(e)=>{
    if(e.target.files){
        image = e.target.files[0];

        const nunu= new FileReader()

        nunu.readAsDataURL(e.target.files[0])

        nunu.onload = (e)=>{ 
            articleImage.src = e.target.result
        }

    }
}

articleImage.addEventListener("change",onFileChange)

articleForm.addEventListener("submit", async (e) => {
    e.preventDefault();
if(!articleTitle.value || !articleImage.value || !articleDesc.value){
    alert("all field are require")
    return
}
//getting aricle sfrom local storage
// articles = JSON.parse(localStorage.getItem("articles")) || [];

// const articleData = { title: articleTitle.value, image: articleImage.value, description: articleDesc.value };

const formData = new FormData();
formData.append('title', articleTitle.value);
formData.append('image', image);
formData.append('description', articleDesc.value);

const response = await fetch('https://backend-ctov.onrender.com/api/v1/articles',{
    method: "POST",
    body: formData,
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
  const data = await response.json();
  if(response.status === 201) {
    articles.push(data.article);
    //clearing form
    articleForm.reset();
    location.reload();
  }
// saving aricles to locastorage
// localStorage.setItem("articles", JSON.stringify(articles));


updateArticleCount();
});

//getting articles from local from api
document.addEventListener("DOMContentLoaded", async function() {
    await fetch('https://backend-ctov.onrender.com/api/v1/articles')
.then(async(response)=>{
    const responseData = await response.json();
  if(response.status === 200){
    articles = responseData.articles;
  }
})
updateArticleCount();
articles.forEach((article, index) => {

    const id = article._id;

    const html2=`<div class="blog">
    <img src=${article.image} alt="blog image">
    <div class="blog-detail">
        <div class="article-title">${article.title}</div>
        <div class="blog-action">
            <button id = "${id}">delete</button>
            <button id="edit-${id}" data-id="${id}">edit</button>
        </div>
    </div>
</div>`
    
    // const html = `<div class="article">
    //                     <p style="width:20%;margin-right:5px"> ${article.title}</p>
    //                     <p style="width:20%;margin-right:5px"> ${article.image}</p>
    //                     <p style="width:30%;margin-right:5px;flex:1"> ${article.discription}</p>
    //                     <div style="width:10%" style="dislay:flex">
    //                         <button><img src="./pen-to-square-solid (1).svg"  class="action-svg" alt="img"/></button>
    //                         <button><img src="./dashbord-logon/bin.png" class="action-svg" id = "${id}" /></button>
    //                     </div>
    //                 </div>`;
                 
                  
    //adding each article to article conatiner
    articleHD.insertAdjacentHTML("afterbegin", html2);

    //adding event listen to trash icon to trigger delet article
    const deleteButton = document.getElementById(id);

    deleteButton.addEventListener("click", () => {
        
        deleteConfirmation.style.display = "block";
 
        confirmationButton.addEventListener("click", async () => {
    
            deleteButton.textContent = "Deleting...";
            deleteButton.attributes.disabled = true;
       await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${id}`,{
            method: "DELETE",
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
            })
            deleteButton.textContent = "Delete";
            deleteButton.attributes.disabled = false;
            window.location.reload(); //reloding window object to reflect change once article is deletde
            deleteConfirmation.style.display = "none";
        })
        cancelButton.addEventListener("click", () => {
            deleteConfirmation.style.display = "none";
        })
       
    });
  
    
    const editBlogContainer = document.getElementById("edit-blog-cont-edit")
    const editBlogForm = document.getElementById("edit-blog-form")
    const editBlogDescription = document.getElementById("article-desc-edit")
    const editBlogImage = document.getElementById("article-image-edit")
    const editBlogTitle = document.getElementById("article-title-edit")
    const editBlogBtn = document.getElementById("sub")

    const editButtons = document.getElementById(`edit-${id}`)
    editButtons.addEventListener("click", () => {
        editBlogContainer.classList.toggle("bhidden")
        editBlogTitle.value = article.title
        editBlogDescription.value = article.description



        editBlogForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            let image=''

            editBlogImage.addEventListener("change", e => {
                if (e.target.files) {
                    image = e.target.files[0];
                }
            })

            const formData = new FormData();

            formData.append('title', editBlogTitle.value);
            formData.append('description', editBlogDescription.value);
            // formData.append('image', article.image);

            const res = await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${id}`,{
                method: "PATCH",
                body:formData,
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
            })

            console.log(res)
            
            editBlogBtn.textContent = "editing..."
            editBlogBtn.disabled = true

            window.location.reload();
            
          
        })
    })


    // editButton.addEventListener("click", () => {
        
    //     deleteConfirmation.style.display = "block";
 
    //     confirmationButton.addEventListener("click", async () => {
    
    //         deleteButton.textContent = "Deleting...";
    //         deleteButton.attributes.disabled = true;
    //    await fetch(`https://backend-ctov.onrender.com/api/v1/articles/${id}`,{
    //         method: "DELETE",
    //         headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
    //         })
    //         deleteButton.textContent = "Delete";
    //         deleteButton.attributes.disabled = false;
    //         window.location.reload(); //reloding window object to reflect change once article is deletde
    //         deleteConfirmation.style.display = "none";
    //     })
    //     cancelButton.addEventListener("click", () => {
    //         deleteConfirmation.style.display = "none";
    //     })
       
    // });
})
});

//function to update our counter
function updateArticleCount() {
    articleCount.textContent = `${articles.length} articles`;
}