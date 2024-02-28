const blogContainer = document.getElementById("blogs-container")

const blogs = JSON.parse(localStorage.getItem("articles")) || [];







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