const addCartNon = document.querySelector('.js-btn-nonsalty');

addCartNon.addEventListener('click', () => {
  cartNumbers(productsNonSalty);
  totalCost(productsNonSalty);
});