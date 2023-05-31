//changing the images

const mainImg = document.querySelector('.product__img');
const smallImg = document.querySelectorAll('.product__littleimg');
const cart = document.querySelector('.cart');

smallImg[0].addEventListener('click', () => {
  mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener('click', () => {
  mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener('click', () => {
  mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener('click', () => {
  mainImg.src = smallImg[3].src;
});

//open cart page
cart.addEventListener('click', () => {
  console.log('Lili Fofa');
  window.location.href = 'cart.html';
});
