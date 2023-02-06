// DOM objects
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".list-items");
const menuIcon = document.querySelector(".menu-icon");


// Opens and closes the menu, and changes the icon
menuToggle.addEventListener("click", ()=> {
    menuItems.classList.toggle("hide");
    menuIcon.classList.toggle("open");
})
// Changes the menu style from mobile to desktop depending on the screen size
window.onload = ()=>{
    if(window.innerWidth > 720) {
        menuItems.classList.remove("dropdown", "hide");
    } else {
        menuItems.classList.add("dropdown", "hide");
    }
}
// Listens for the window to be resized and the changes the menu style
window.addEventListener("resize", ()=>{
    if(window.innerWidth > 720) {
        menuItems.classList.remove("dropdown", "hide");
    } else {
        menuItems.classList.add("dropdown", "hide");
    }
})



