const addCart = document.querySelector('.js-btn-salty');

addCart.addEventListener('click', () => {
  cartNumbers(productsSalty);
  totalCost(productsSalty);
});