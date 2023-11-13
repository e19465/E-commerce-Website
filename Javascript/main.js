// Variables
const featureSection = document.getElementById("feature");
const featureProducts = document.querySelector(".pro-container");
const newArrivals = document.querySelector(".new-arrivals");
const year = document.querySelector(".date");

// setting date dynamicaly
const yr = new Date().getFullYear();
year.innerText = yr;

const featureList = [
  {
    id: 1,
    img: "./img/features/f1.png",
    h6: "Free Shipping",
    h6_bg_color: "#f0bcc8",
  },
  {
    id: 2,
    img: "./img/features/f2.png",
    h6: "Online Order",
    h6_bg_color: "#cdebbc",
  },
  {
    id: 3,
    img: "./img/features/f3.png",
    h6: "Save Money",
    h6_bg_color: "#d1e8f2",
  },
  {
    id: 4,
    img: "./img/features/f4.png",
    h6: "Promotions",
    h6_bg_color: "#cdd4f8",
  },
  {
    id: 5,
    img: "./img/features/f5.png",
    h6: "Happy Sell",
    h6_bg_color: "#e4c8e4",
  },
  {
    id: 6,
    img: "./img/features/f6.png",
    h6: "F24/7 Support",
    h6_bg_color: "#e6cfb2",
  },
];

const featureProductList = [
  {
    id: 1,
    img: "./img/products/f1.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 2,
    img: "./img/products/f2.jpg",
    brand: "nike",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 3,
    img: "./img/products/f3.jpg",
    brand: "jordan",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 4,
    img: "./img/products/f4.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 5,
    img: "./img/products/f5.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 6,
    img: "./img/products/f6.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 7,
    img: "./img/products/f7.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 8,
    img: "./img/products/f8.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
];

const newArrivalstList = [
  {
    id: 1,
    img: "./img/products/n1.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 2,
    img: "./img/products/n2.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 3,
    img: "./img/products/n3.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 4,
    img: "./img/products/n4.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 5,
    img: "./img/products/n5.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 6,
    img: "./img/products/n6.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 7,
    img: "./img/products/n7.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
  {
    id: 8,
    img: "./img/products/n8.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addFeatureItemsForFeature(featureList);
  addFeatureItemsForProduct(featureProductList);
  addItemsForNewArrivals(newArrivalstList);
});

// function to dynaically add feature items to web page
function addFeatureItemsForFeature(featureList) {
  let menuItems = featureList
    .map((item) => {
      return `
        <div class="fe-box">
        <img src="${item.img}" alt="" loading="lazy"/>
        <h6 style="background-color: ${item.h6_bg_color}">${item.h6}</h6>
      </div>`;
    })
    .join("");
  featureSection.innerHTML = menuItems;
}

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

// function to dynaically add new arrivals to web page
function addItemsForNewArrivals(featureProductList) {
  let menuItems = newArrivalstList
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
  newArrivals.innerHTML = menuItems;
}

// window scroll event listener
// WINDOW SCROLL EVENT LISTENER
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const backToTopBtn = document.querySelector(".back-top-icon");
  if (scrollHeight > 1500) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});
