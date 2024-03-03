const blogContainer = document.getElementById("blogs-container")

let blogs = [];

//getting articles from local from api
document.addEventListener("DOMContentLoaded", async function() {
    await fetch('https://backend-ctov.onrender.com/api/v1/articles',{
})
.then(async(response)=>{
    const responseData = await response.json();
  if(response.status === 200){
    blogs = responseData.articles;

  }
})

const loadBlog=()=>{
    blogs.map(blog=>{
        const html=`<a href="#" class="blog">
<img src=${blog.image} alt="blog image"/>
<h4>${blog.title}</h4>
<div class="blog-des">
    <p>12 nov 2023</p>
    <p>@Emmy</p>
</div>
</a>`

blogContainer.insertAdjacentHTML("afterbegin",html)
    })

}

loadBlog()

});