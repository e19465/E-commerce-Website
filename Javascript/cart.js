// VARIABLES
const tBody = document.querySelector(".tbody");
const cartSubTotals = document.querySelector(".cart-subtotals");
const navBarCloseIcon = document.querySelector(".close-btn-li");
const menuIcon = document.getElementById("menu-i");
const navBar = document.getElementById("navbar");
let value = 0; //cart subtotals

// CART LIST
const tListArray = [
  {
    id: 1,
    img: "../img/products/f1.jpg",
    name: "Cartoon Astronous T-Shirts",
    price: 125.0,
  },
  {
    id: 2,
    img: "../img/products/f2.jpg",
    name: "Cartoon Astronous T-Shirts",
    price: 125.0,
  },
  {
    id: 3,
    img: "../img/products/f3.jpg",
    name: "Cartoon Astronous T-Shirts",
    price: 250.0,
  },
  {
    id: 4,
    img: "../img/products/f4.jpg",
    name: "Cartoon Astronous T-Shirts",
    price: 500.0,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addSelectedItems(tListArray);
});

// EVENT LISTENER FOR MENU ICON
menuIcon.addEventListener("click", () => {
  navBar.classList.add("active");
});

// EVENT LISTENER FOR MENU ICON CLOSE BTN
navBarCloseIcon.addEventListener("click", () => {
  navBar.classList.remove("active");
});

// function to dynaically add selected items to web page
function addSelectedItems(tListArray) {
  let listItems = tListArray
    .map((item) => {
      const itmPrice = item.price.toFixed(2);

      return `
    <tr>
        <td>
            <a href="#"><i class="fa-regular fa-circle-xmark"></i></a>
        </td>
        <td>
            <img src="${item.img}" alt="" />
        </td>
        <td>$${item.name}</td>
        <td>${itmPrice}</td>
        <td>
            <input
            type="number"
            name="number"
            class="quantity-input"
            id="number"
            value="1"
            min="0"
            />
        </td>
        <td class="Changing_tot_vall" id=${item.id}>${itmPrice}</td>
    </tr>
      `;
    })
    .join("");

  tBody.innerHTML = listItems;
  changesubTotValue();
  changeTotalCartValue();
}

// changing corresponding sub total value for input
function changesubTotValue() {
  // Select all input elements with the class 'quantity-input'
  const quantityInputs = document.querySelectorAll(".quantity-input");

  quantityInputs.forEach((input, index) => {
    // Add an event listener to each input element
    input.addEventListener("input", (e) => {
      const quan = e.target.value;
      const pri = tListArray[index].price;
      const final = quan * pri;
      const selectedItemsTotalCont = document.getElementById(`${index + 1}`);
      selectedItemsTotalCont.innerHTML = final.toFixed(2);
      updateValue();
    });
  });
}

// function to update value of ALL CART SUBTOTALS
function updateValue() {
  value = 0; // Reset the value variable

  // Select all input elements with the class 'Changing_tot_vall'
  const subTotal = document.querySelectorAll(".Changing_tot_vall");
  subTotal.forEach((subTot) => {
    value += parseFloat(subTot.innerHTML);
  });

  // Set the new value to cartSubTotals.innerHTML
  cartSubTotals.innerHTML = value.toFixed(2);

  // total + delivery change when every time total changing
  const totalFee = document.querySelector(".total-final");
  totalFee.innerHTML = value.toFixed(2);
}

// change value of ALL CART SUBTOTALS
function changeTotalCartValue() {
  // Select all input elements with the class 'Changing_tot_vall'
  const subTotal = document.querySelectorAll(".Changing_tot_vall");
  subTotal.forEach((subTot) => {
    value = value + parseFloat(subTot.innerHTML);
  });
  cartSubTotals.innerHTML = value.toFixed(2);
  const totalFee = document.querySelector(".total-final");
  totalFee.innerHTML = value.toFixed(2);
}

updateValue();
