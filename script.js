// DOM objects
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".list-items");
const navLinks = document.querySelectorAll(".nav-link");
const menuIcon = document.querySelector(".menu-icon");
const headerNav = document.querySelector("header");
const servicesList = document.querySelector(".services-list");
const contactForm = document.querySelector("#contact-form");

// Array of Objects that will carry the Card information

const servicesArr = [
  {
    icon: "https://via.placeholder.com/50",
    title: "CPR / AED",
    description:
      "Equip yourself with the knowledge and skills to save lives with our CPR/AED certification course. Whether it's at work, home or in public, you'll learn the essential techniques for performing CPR and using an AED device, helping you become a valuable asset to your community.",
  },
  {
    icon: "https://via.placeholder.com/50",
    title: "Standard First Aid",
    description:
      "Be prepared to act in any emergency situation with our Standard First Aid certification course. Covering everything from wound care to allergic reactions, this course provides you with the tools and knowledge to respond confidently to any medical emergency.",
  },
  {
    icon: "https://via.placeholder.com/50",
    title: "BLS / AED",
    description:
      " Learn how to save lives in emergency situations with our BLS/AED certification course. This course covers basic life support techniques and AED usage, empowering you to confidently respond to cardiac and respiratory emergencies.",
  },
];

// Opens and closes the menu, and changes the icon
menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("hide");
  menuIcon.classList.toggle("open");
});

// Changes the menu style from mobile to desktop depending on the screen size
window.onload = () => {
  if (window.innerWidth > 768) {
    menuItems.classList.remove("dropdown", "hide");
  } else {
    menuItems.classList.add("dropdown", "hide");
  }
};
// Listens for the window to be resized and the changes the menu style
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuItems.classList.remove("dropdown", "hide");
  } else {
    menuItems.classList.add("dropdown", "hide");
    
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        menuItems.classList.add("hide");
        menuIcon.classList.remove("open");
      })
    );
  }
});

// Creates a seperate Card for each object in the services Array
servicesArr.forEach((service) => {
  // Creates the html elements for the card and text
  const serviceCard = document.createElement("div");
  const serviceIcon = document.createElement("img");
  const serviceTitle = document.createElement("h4");
  const serviceDescription = document.createElement("p");

  // Adds the proper classes to each new element
  serviceCard.classList.add("service-card");
  serviceIcon.classList.add("service-icon");
  serviceTitle.classList.add("service-title");
  serviceDescription.classList.add("service-description");

  // Inserts the proper text and images into each instance
  serviceIcon.src = service.icon;
  serviceTitle.innerText = service.title;
  serviceDescription.innerText = service.description;

  // Appends the text into the 'card' div. And then the 'card' into the services section
  serviceCard.appendChild(serviceIcon);
  serviceCard.appendChild(serviceTitle);
  serviceCard.appendChild(serviceDescription);
  servicesList.appendChild(serviceCard);
});

// Form submission

const formSubmitted = (e) => {
  e.preventDefault();
  console.log("Submitted");
};

contactForm.addEventListener("submit", formSubmitted);
