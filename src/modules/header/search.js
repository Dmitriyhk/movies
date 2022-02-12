const form = document.querySelector('.control-form')
const search = document.querySelector('.control__search')
const searchBtn = document.querySelector('.control-btn_search')
form.addEventListener('submit', function(event) {
  event.preventDefault()
  window.location.href = 'movieList.html?id=' + search.value
})