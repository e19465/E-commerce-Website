const featureSection = document.getElementById("feature");

const featureList = [
  {
    id: 1,
    img: "../img/features/f1.png",
    h6: "Free Shipping",
    h6_bg_color: "#f0bcc8",
  },
  {
    id: 2,
    img: "../img/features/f2.png",
    h6: "Online Order",
    h6_bg_color: "#cdebbc",
  },
  {
    id: 3,
    img: "../img/features/f3.png",
    h6: "Save Money",
    h6_bg_color: "#d1e8f2",
  },
  {
    id: 4,
    img: "../img/features/f4.png",
    h6: "Promotions",
    h6_bg_color: "#cdd4f8",
  },
  {
    id: 5,
    img: "../img/features/f5.png",
    h6: "Happy Sell",
    h6_bg_color: "#e4c8e4",
  },
  {
    id: 6,
    img: "../img/features/f6.png",
    h6: "F24/7 Support",
    h6_bg_color: "#e6cfb2",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addFeatureItemsForFeature(featureList);
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