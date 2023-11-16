const blogSection = document.getElementById("blog");

const blogsArray = [
  {
    id: 1,
    img: "../img/blog/b1.jpg",
    h4: "The Cotton Jersey Zip-Up Hoodie",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/01",
  },
  {
    id: 2,
    img: "../img/blog/b2.jpg",
    h4: "How to Style a Quiff",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/02",
  },
  {
    id: 3,
    img: "../img/blog/b3.jpg",
    h4: "Must have Skater Girl items",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "33/03",
  },
  {
    id: 4,
    img: "../img/blog/b4.jpg",
    h4: "Runway Inspired Trends",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/04",
  },
  {
    id: 5,
    img: "../img/blog/b5.jpg",
    h4: "AW20 Men's wear Trends",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/05",
  },
  {
    id: 6,
    img: "../img/blog/b6.jpg",
    h4: "All stylish Baby items",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/06",
  },
  {
    id: 7,
    img: "../img/blog/b7.jpg",
    h4: "Levis Men's Trends",
    p: "Versatile and comfortable, the everyday jersey is a wardrobe staple, effortlessly blending style with comfort. Whether you're embracing acasual vibe or elevating your look to chic heights, the soft fabric ensures you navigate every occasion with ease, making it an essential fashion choice for all.",
    h1: "23/07",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addBlogItems(blogsArray);
});

// function to dynaically add blog items to web page
function addBlogItems(blogsArray) {
  let menuItems = blogsArray
    .map((item) => {
      return `
        <div class="blog-box">
            <div class="blog-img">
                <img src="${item.img}" alt="" />
            </div>
            <div class="blog-details">
                <h4>${item.h4}</h4>
                <p>${item.p}</p>
                <a href="#">Continue Reading</a>
            </div>
            <h1>${item.h1}</h1>
        </div>
        `;
    })
    .join("");
  blogSection.innerHTML = menuItems;
}
