import './search'
const iconBurger = document.querySelector('.header-burger')
const body = document.querySelector('body')
if (localStorage.getItem('nightMode') == 2) {
  body.style.backgroundColor = '#fff'
  body.style.color = '#000'
} else {
  body.style.backgroundColor = '#000'
  body.style.color = '#fff'
  localStorage.setItem('nightMode', 1)
}

const ball = document.querySelector(".toggle-ball");
const toggle = document.querySelector(".toggle");


ball.addEventListener("click", () => {
  if (localStorage.getItem('nightMode') == 2) {
    body.style.backgroundColor = '#000'
    body.style.color = '#fff'
    localStorage.setItem('nightMode', 1)
    ball.classList.toggle("active")
    toggle.classList.toggle("active")
  } else {
    body.style.backgroundColor = '#dddddd'
    body.style.color = '#000'
    localStorage.setItem('nightMode', 2)
    ball.classList.toggle("active")
    toggle.classList.toggle("active")
  }
});

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const control = document.querySelector(".control");

iconBurger.addEventListener('click', function() {
  header.classList.toggle('-active')
  nav.classList.toggle('-active')
  control.classList.toggle('-active')
})