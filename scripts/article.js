const articleForm = document.getElementById("article-form")
const articleTitle=document.getElementById("article-title")
const articleImage=document.getElementById("article-image")
const articleDesc=document.getElementById("article-desc")
const articleCount = document.getElementById("article-count")
const articleHD = document.getElementById("article-holder");


articleForm.addEventListener("submit", (e) => {
    // e.preventDefault();

    const articleData = {title : articleTitle.value, image: articleImage.value, discription: articleDesc.value };

    
    const retrivedArr = JSON.parse(localStorage.getItem("articles")) || []

    // Add the new form data to the container
    retrivedArr.push(articleData);

    // Save the updated container back to localStorage
    localStorage.setItem("articles", JSON.stringify(retrivedArr ));

    // Reset the form
    articleForm.reset();
});

const retrivedArr = JSON.parse(localStorage.getItem("articles")) || []
articleCount.textContent = `${retrivedArr.length} articles`


retrivedArr.map((article,index) => {
    const delet = document.getElementById("delete");
    const id = `${index}-trash`
    const html = `<div class="article">
                        <p>${article.title}</p>
                        <div>
                            <button><img src="./pen-to-square-solid (1).svg"  class="action-svg" alt="img"/></button>
                            <button><img src="./trash-solid.svg" class="action-svg" id = ${id} /></button>
            
                        </div>
                    </div>`
    articleHD.insertAdjacentHTML("afterbegin", html);
    const newTrash = document.getElementById(id);
  
  newTrash.addEventListener("click",(index)=>{
      
      // delet.style.display = "block";
  
  const updatedArticles = retrivedArr.filter((item,i)=>i !== index)
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      console.log(updatedArticles);
  




    
  })
})

