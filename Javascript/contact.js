const peopleContainer = document.querySelector(".people");
const navBarCloseIcon = document.querySelector(".close-btn-li");
const menuIcon = document.getElementById("menu-i");
const navBar = document.getElementById("navbar");

const year = document.querySelector(".date");
// setting date dynamicaly
const yr = new Date().getFullYear();
year.innerHTML = yr;

const peopleArray = [
  {
    id: 1,
    name: "John Doe",
    profession: "Seniour Marketing Manager",
    phone: "0774563698",
    email: "contact@example.com",
    img: "../img/people/1.png",
  },
  {
    id: 2,
    name: "William Smith",
    profession: "Seniour Marketing Manager",
    phone: "0774563698",
    email: "contact@example.com",
    img: "../img/people/2.png",
  },
  {
    id: 3,
    name: "Sarah Jones",
    profession: "Seniour Marketing Manager",
    phone: "0774563698",
    email: "contact@example.com",
    img: "../img/people/3.png",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addPeople(peopleArray);
});

// function to dynaically add people to web page
function addPeople(peopleArray) {
  let menuItems = peopleArray
    .map((item) => {
      return `
        <div>
            <img src="${item.img}" alt="" / width="65" height="65" loading="lazy">
            <p>
                <span>${item.name},</span> ${item.profession} <br />
                Phone: ${item.phone} <br />
                Email: ${item.email}
            </p>
        </div>
        `;
    })
    .join("");
  peopleContainer.innerHTML = menuItems;
}
// EVENT LISTENER FOR MENU ICON
menuIcon.addEventListener("click", () => {
  navBar.classList.add("active");
});

// EVENT LISTENER FOR MENU ICON CLOSE BTN
navBarCloseIcon.addEventListener("click", () => {
  navBar.classList.remove("active");
});
