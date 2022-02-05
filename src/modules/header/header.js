import './search'

const nigth = document.querySelector('.control-btn_createacc')
let body = document.querySelector('body')
// localStorage.setItem('nightMode', true)
console.log(localStorage.getItem('nightMode'))
if (localStorage.getItem('nightMode') == 2) {
  body.style.backgroundColor = '#fff'
  body.style.color = '#000'
  console.log('первая проверка if')
} else {
  body.style.backgroundColor = '#000'
  body.style.color = '#fff'
  console.log('первая проверка else')
  localStorage.setItem('nightMode', 1)
}



nigth.addEventListener('click', function() {
  if (localStorage.getItem('nightMode') == 2) {
    body.style.backgroundColor = '#000'
    body.style.color = '#fff'
    localStorage.setItem('nightMode', 1)
    console.log(localStorage.getItem('nightMode'))
    console.log('клик проверка if')
  } else {
    body.style.backgroundColor = '#dddddd'
    body.style.color = '#000'
    localStorage.setItem('nightMode', 2)
    console.log(localStorage.getItem('nightMode'))
    console.log('клик проверка else')
  }
})

