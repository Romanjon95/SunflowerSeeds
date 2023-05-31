// elements

const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const search = document.querySelector('.search');
const form = document.querySelector('.search-form');
const close = document.querySelector('.search-close__img');
const cart = document.querySelector('.cart');

//menu icon-list open/close

menu.addEventListener('click', () => {
  console.log('cherque');
  nav.classList.toggle('active');
})

//open cart page

cart.addEventListener('click', () => {
  console.log('Lili Fofa');
  window.location.href = 'cart.html';
});

//search icon open/close

search.addEventListener('click', () => {
  console.log('Bombass');
  form.classList.toggle('showed');
})

close.addEventListener('click', () => {
  console.log('farfalle');
  form.classList.remove('showed');
})

// scrollTo function

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

// elements
const menuScroll = document.querySelector('.menu');
const menuPage = document.querySelector('.products');
const orderBtn = document.querySelector('.home__btn');
const aboutPage = document.querySelector('.about');
const aboutScroll = document.querySelector('.about-link');
const orderPage = document.querySelector('.order');
const orderScroll = document.querySelector('.order-link');
const homePage = document.querySelector('.home');
const homeScroll = document.querySelector('.home-link');
//footer elements
const homeFooter = document.querySelector('.home-footer');
const menuFooter = document.querySelector('.menu-footer');
const aboutFooter = document.querySelector('.about-footer');
const orderFooter = document.querySelector('.order-footer');
const locationFooter = document.querySelector('.location-footer');
const locationPage = document.querySelector('.map');

// header icons scrolling

orderBtn.addEventListener('click', () => {
  scrollTo(menuPage);
});

aboutScroll.addEventListener('click', () => {
  scrollTo(aboutPage);
})

menuScroll.addEventListener('click', () => {
  scrollTo(menuPage);
});

orderScroll.addEventListener('click', () => {
  scrollTo(orderPage);
});

homeScroll.addEventListener('click', () => {
  scrollTo(homePage);
});

//footer links scrolling

homeFooter.addEventListener('click', () => {
  scrollTo(homePage);
});

menuFooter.addEventListener('click', () => {
  scrollTo(menuPage);
});

aboutFooter.addEventListener('click', () => {
  scrollTo(aboutPage);
});

orderFooter.addEventListener('click', () => {
  scrollTo(orderPage);
});

locationFooter.addEventListener('click', () => {
  scrollTo(locationPage);
})

// open the product on main page

const productSalty = document.querySelector('.salty');
const product = document.querySelector('.non-salty');

productSalty.addEventListener('click', () => {
  window.location.href = 'sproduct.html';
});

product.addEventListener('click', () => {
  console.log('bombass');
  window.location.href = 'sproductnon.html';
});

//function for the cards icon in header
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.header__span').textContent = productNumbers;
  }
}

//local storage for all the products that will be added to the cart

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  //converting productNumbers from string to number
  productNumbers = parseInt(productNumbers);
  //if productNumbers already exists, I add the quantity the my local storage
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.header__span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.header__span').textContent = 1;
  }
}

onLoadCartNumbers();