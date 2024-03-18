"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

// MENU CODE
// Define your menu items
const menuItems = [
  // BREAKFAST
  {
    title: "Chilaquiles",
    category: "Breakfast",
    price: "9.50",
    imageUrl: "./assets/images/food/Chilaquiles.jpg",
    rating: 5,
  },
  {
    title: "Enfrijoladas",
    category: "Breakfast",
    price: "$9.50",
    imageUrl: "./assets/images/food/Enfrijoladas.jpg",
    rating: 5,
  },
  {
    title: "Huevos con Chorizo",
    category: "Breakfast",
    price: "$11.00",
    imageUrl: "./assets/images/food/huevos-chorizo.jpg",
    rating: 5,
  },
  {
    title: "Entomatadas",
    category: "Breakfast",
    price: "$11.00",
    imageUrl: "./assets/images/food/Entomatadas.jpg",
    rating: 5,
  },
  // ANTOJITOS MEXICANOS
  {
    title: "Empanadas",
    category: "Antojitos Mexicanos",
    price: "$13.00",
    imageUrl: "./assets/images/food/Empanadas.jpg",
    rating: 5,
  },
  {
    title: "Garnachas istmeñas",
    category: "Antojitos Mexicanos",
    price: "Custom Pricing",
    imageUrl: "./assets/images/food/Garnachas istmeñas.jpg",
    rating: 5,
  },
  {
    title: "Picaditas de Frijoles o Salsa",
    category: "Antojitos Mexicanos",
    price: "$11.00",
    imageUrl: "./assets/images/food/Picaditas de Frijoles o Salsa.jpg",
    rating: 5,
  },
  {
    title: "Tlayudas",
    category: "Antojitos Mexicanos",
    price: "$15.00",
    imageUrl: "./assets/images/food/Tlayudas.jpg",
    rating: 5,
  },
  {
    title: "Tamales Oaxaqueños de Mole",
    category: "Antojitos Mexicanos",
    price: "Custom Pricing",
    imageUrl: "./assets/images/food/Tamales Oaxaqueños de Mole.jpg",
    rating: 5,
  },
  {
    title: "Enchiladas",
    category: "Antojitos Mexicanos",
    price: "$21.00",
    imageUrl: "./assets/images/food/Enchiladas.jpg",
    rating: 5,
  },
  {
    title: "Taquitos Fritos",
    category: "Antojitos Mexicanos",
    price: "$13.00",
    imageUrl: "./assets/images/food/Taquitos Fritos.png",
    rating: 5,
  },
  {
    title: "Ropa Vieja",
    category: "Antojitos Mexicanos",
    price: "Custom Pricing",
    imageUrl: "./assets/images/food/Ropa Vieja.png",
    rating: 5,
  },
  // VEGAN
  {
    title: "Tostadas de Tinga (Vegan)",
    category: "Vegan",
    price: "$14.00",
    imageUrl: "./assets/images/food/Tostadas de Tinga (Vegan).jpg",
    rating: 5,
  },
  // TACOS
  // Note: Details for each taco type might be more complex in a real application
  {
    title: "Authentic Street Tacos - Various Types",
    category: "Tacos",
    price: "Varies",
    imageUrl: "./assets/images/food/Authentic Street Tacos.jpg",
    rating: 5,
  },
  // TORTAS
  // Note: Individual Tortas are not listed separately here
  {
    title: "Tortas - Various Types",
    category: "Tortas",
    price: "Varies",
    imageUrl: "./assets/images/food/Tortas - Various Types.jpg",
    rating: 5,
  },
  // SEAFOOD
  {
    title: "Cocktel de Camaron",
    category: "Seafood",
    price: "$12.00",
    imageUrl: "./assets/images/food/Coctel-de-Camerones.jpg",
    rating: 5,
  },
];

function generateStarRating(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += `<ion-icon name="${
      i < rating ? "star" : "star-outline"
    }"></ion-icon>`;
  }
  return stars;
}

function displayMenuItems() {
  const menuListElement = document.querySelector(".food-menu-list");
  menuListElement.innerHTML = ""; // Clear existing menu items

  menuItems.forEach((item) => {
    const menuItemHtml = `
            <li>
                <div class="food-menu-card">
                    <div class="card-banner">
                        <img src="${
                          item.imageUrl
                        }" width="300" height="300" loading="lazy" alt="${
      item.title
    }" class="w-100"/>
                        <button class="btn food-menu-btn">Order Now</button>
                    </div>
                    <div class="wrapper">
                        <p class="category">${item.category}</p>
                        <div class="rating-wrapper">${generateStarRating(
                          item.rating
                        )}</div>
                    </div>
                    <h3 class="h3 card-title">${item.title}</h3>
                    <div class="price-wrapper">
                        <p class="price-text">Price:</p>
                        <data class="price">${item.price}</data>
                    </div>
                </div>
            </li>
        `;

    menuListElement.insertAdjacentHTML("beforeend", menuItemHtml);
  });
}
document.addEventListener("DOMContentLoaded", displayMenuItems);
