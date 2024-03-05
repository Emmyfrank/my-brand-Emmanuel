const hideSidebar = document.getElementById("hide")
const sidebar = document.getElementById("sidebar")
const humburg = document.getElementById("humb")


humburg.addEventListener("click", () => {
    sidebar.style.display="block"
})

hideSidebar.addEventListener("click", () => {
    sidebar.style.display="none"
})