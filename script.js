// DOM objects
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".list-items");
const menuIcon = document.querySelector(".menu-icon");


// Array of Objects that will carry the Card information

const servicesArr = [
  {
    title: "BLS / AED",
    description: " Learn how to save lives in emergency situations with our BLS/AED certification course. This course covers basic life support techniques and AED usage, empowering you to confidently respond to cardiac and respiratory emergencies."
  },
  {
    title: "CPR / AED",
    description: "Equip yourself with the knowledge and skills to save lives with our CPR/AED certification course. Whether it's at work, home or in public, you'll learn the essential techniques for performing CPR and using an AED device, helping you become a valuable asset to your community."
  },
  {
    title: "Standard First Aid",
    description: "Be prepared to act in any emergency situation with our Standard First Aid certification course. Covering everything from wound care to allergic reactions, this course provides you with the tools and knowledge to respond confidently to any medical emergency."
  }
]

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



