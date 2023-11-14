const featureProducts = document.querySelector(".pro-container");

const featureProductList = [
  {
    id: 1,
    img: "../img/products/f1.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 2,
    img: "../img/products/f2.jpg",
    brand: "nike",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 3,
    img: "../img/products/f3.jpg",
    brand: "jordan",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 4,
    img: "../img/products/f4.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 5,
    img: "../img/products/f5.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 6,
    img: "../img/products/f6.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 7,
    img: "../img/products/f7.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 8,
    img: "../img/products/f8.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 9,
    img: "../img/products/n1.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 10,
    img: "../img/products/n2.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 11,
    img: "../img/products/n3.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 12,
    img: "../img/products/n4.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 13,
    img: "../img/products/n5.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 14,
    img: "../img/products/n6.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 15,
    img: "../img/products/n7.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
  {
    id: 16,
    img: "../img/products/n8.jpg",
    brand: "adidas",
    category: "Cartoon Astronout T-shirts",
    price: "$78",
    desc_page: "../HTML/desc_pages/singleProduct_1.html",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addFeatureItemsForProduct(featureProductList);
});

// function to dynaically add feature products to web page
function addFeatureItemsForProduct(featureProductList) {
  let menuItems = featureProductList
    .map((item) => {
      return `
        <div class="pro" onclick=window.location.href="${item.desc_page}">
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
