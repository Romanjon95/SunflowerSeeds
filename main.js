
// Object
let productsSalty = {
  imgSrc: './img/Megabayt_salty.jpg',
  name: 'Megabayt Salty',
  size: 85,
  price: 13000,
  inCart: 0
};

//function for the cards icon in header
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.header__span').textContent = productNumbers;
  }
}

//local storage for all the products that will be added to the cart

function cartNumbers(productsSalty) {
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

  setItems(productsSalty);
}

function setItems(productsSalty) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[productsSalty.name] === undefined) {
      cartItems = {
        ...cartItems,
        [productsSalty.name]: productsSalty
      }
    }
    cartItems[productsSalty.name].inCart += 1;
  } else {
    productsSalty.inCart = 1;
    cartItems = {
      [productsSalty.name]: productsSalty
    }
  }
  
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(productsSalty) {
  // console.log('the product price is', productsSalty.price);
  let cartCost = localStorage.getItem('totalCost');
  console.log('My cartCost is', cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + productsSalty.price);
  } else {
    localStorage.setItem('totalCost', productsSalty.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.tbody');
  let cartCost = localStorage.getItem('totalCost');
  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `<tr class="table__tr">
      <td class="table__td lowercase"><img data-action="delete" src="./icons/close.png" width="14px" alt=""></td>
      <td class="table__td lowercase"><img class="table__img" src="${productsSalty.imgSrc}" alt=""></td>
      <td class="table__td lowercase">${productsSalty.name}</td>
      <td class="table__td lowercase">UZS${productsSalty.price}</td>
      <td class="table__td lowercase">${item.inCart}</td>
      <td class="table__td lowercase">UZS${item.inCart * item.price}</td>
    </tr>`;
    });

    productContainer.innerHTML += `
    <div class="total">
      <h3 class="total__title">Cart totals:</h3>
      <p class="total__text price">Subtotal: UZS${cartCost}</p>
      <h4 class="total__total total-price">Total: UZS${cartCost}</h4>
      <button type="submit" class="total__btn">Checkout</button>
    </div>`;
  }
}

onLoadCartNumbers();
displayCart();

// deleting an item
window.addEventListener('click', event => {
  console.log(event.target.dataset.action);
  if (event.target.dataset.action === 'delete') {
    console.log('delete iut==');
    if (event.target.closest('.table__tr')) {
      console.log('in cart');
      event.target.closest('.table__tr').remove();
    }
  }
})