// VARIABLES
const featureProducts = document.querySelector(".pro-container");
const bigImage = document.getElementById("mainImage");
const smallImgArray = document.querySelectorAll(".small-img-col");
const navBarCloseIcon = document.querySelector(".close-btn-li");
const menuIcon = document.getElementById("menu-i");
const navBar = document.getElementById("navbar");

const year = document.querySelector(".date");
// setting date dynamicaly
const yr = new Date().getFullYear();
year.innerHTML = yr;
// FEATURE LST
const featureProductList = [
  {
    id: 1,
    img: "../../img/products/n1.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 2,
    img: "../../img/products/n2.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 3,
    img: "../../img/products/n3.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 4,
    img: "../../img/products/n4.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
];

// WINDOW EVENT LISTENER
window.addEventListener("DOMContentLoaded", () => {
  addFeatureItemsForProduct(featureProductList);
});

// function to dynaically add feature products to web page
function addFeatureItemsForProduct(featureProductList) {
  let menuItems = featureProductList
    .map((item) => {
      return `
        <div class="pro">
            <img src="${item.img}" alt="" loading="lazy"/>
            <dev class="desc">
              <span>${item.brand}</span>
              <h5>${item.category}</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>${item.price}</h4>
            </dev>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          </div>`;
    })
    .join("");
  featureProducts.innerHTML = menuItems;
}

// FUNCTION TO CHANGE IMAGE
smallImgArray.forEach((image) => {
  image.addEventListener("click", (e) => {
    bigImage.src = e.target.src;
  });
});

// EVENT LISTENER FOR MENU ICON
menuIcon.addEventListener("click", () => {
  navBar.classList.add("active");
});

// EVENT LISTENER FOR MENU ICON CLOSE BTN
navBarCloseIcon.addEventListener("click", () => {
  navBar.classList.remove("active");
});
