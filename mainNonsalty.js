
// Object
let productsNonSalty = {
  imgSrc: './img/Megabayt_non_salty.jpg',
  name: 'Megabayt Non Salty',
  size: 100,
  price: 15000,
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

function cartNumbers(productsNonSalty) {
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

  setItems(productsNonSalty);
}

function setItems(productsNonSalty) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[productsNonSalty.name] === undefined) {
      cartItems = {
        ...cartItems,
        [productsNonSalty.name]: productsNonSalty
      }
    }
    cartItems[productsNonSalty.name].inCart += 1;
  } else {
    productsNonSalty.inCart = 1;
    cartItems = {
      [productsNonSalty.name]: productsNonSalty
    }
  }
  
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(productsNonSalty) {
  // console.log('the product price is', productsSalty.price);
  let cartCost = localStorage.getItem('totalCost');
  console.log('My cartCost is', cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + productsNonSalty.price);
  } else {
    localStorage.setItem('totalCost', productsNonSalty.price);
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
      <td class="table__td lowercase"><img class="table__img" src="${productsNonSalty.imgSrc}" alt=""></td>
      <td class="table__td lowercase">${productsNonSalty.name}</td>
      <td class="table__td lowercase">UZS${productsNonSalty.price}</td>
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