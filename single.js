const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const search = document.querySelector('.search');
const form = document.querySelector('.search-form');
const close = document.querySelector('.search-close__img');

//menu list

menu.addEventListener('click', () => {
  console.log('cherque');
  nav.classList.toggle('active');
})

//search window open/close

search.addEventListener('click', () => {
  console.log('Bombass');
  form.classList.toggle('showed');
})

close.addEventListener('click', () => {
  console.log('farfalle');
  form.classList.remove('showed');
})