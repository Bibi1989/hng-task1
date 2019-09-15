const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
let loginUrl = "/"

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
    window.location = loginUrl;
})
