import "./main.scss";

let navBar = document.createElement("nav");
navBar.classList.add("nav");
navBar.innerHTML = `<div class="nav__logo"><a href="./index.html">Easy Eats</a></div>
<ul class="nav__list">
  <li class="nav__list__item"><a href="./menu.html">Menu</a></li>
  <li class="nav__list__item"><a href="#">Events</a></li>
  <li class="nav__list__item"><a href="#">Contact</a></li>
  <li class="nav__list__item"><a href="#">Bookings</a></li>
</ul>`;
document.body.insertAdjacentElement("afterbegin", navBar);

let bookingForm = document.querySelector(".form");
let formInputs = bookingForm.querySelectorAll("input");

formInputs.forEach((input) => {
  input.addEventListener("change", () => {
    let inputLabel = input.nextElementSibling;
    if (input.value !== "") {
      inputLabel.classList.add("label--focus");
    } else {
      inputLabel.classList.remove("label--focus");
    }
  });
});

let dateInput = document.querySelector("input[type='date'");
let today = new Date().toISOString().slice(0, 10);
dateInput.value = today;
dateInput.setAttribute("min", today);
