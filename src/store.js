// fill the cards with data from the MockAPI
const cardContainer = document.querySelector(".cardContainer");
let newCard;
let test1;
let cardButtons;
let shortDescription;
let card;
let detilasCardDiv;
let detailsButton;
let addToCart;
let cartContent = [localStorage.getItem("cart")];

fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      newCard = document.createElement("div");
      newCard.id = data[i].id;
      cardContainer.appendChild(newCard);
      card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="img">
      <img class="cardImg" src="${data[i].img}" alt="No Image">
    </div>
    
      <div class="shortDescription"> <p id="productTitle">${data[i].title}</p>
        <p class="productDescription">${data[i].description}</p>

    
      <div class="cardPrice">Price: ${data[i].price} RON</div>`;
      newCard.appendChild(card);
      cardButtons = document.createElement("div");
      cardButtons.classList.add("cardButtons");
      card.appendChild(cardButtons);

      detailsButton = document.createElement("button");
      detailsButton.classList.add("btn-grad");
      detailsButton.classList.add("detilasCardButton");
      detailsButton.innerHTML = `<i id="detilsIcon" class="fas fa-info-circle"></i>Details`;
      cardButtons.appendChild(detailsButton);
      addToCart = document.createElement("button");
      addToCart.classList.add("btn-grad");
      addToCart.classList.add("addToCartCartButton");
      addToCart.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to Cart`;
      cardButtons.appendChild(addToCart);
      detailsButton.addEventListener("click", detailsFunction);
      addToCart.addEventListener("click", addToCartFunction);
    }
  });
async function addToCartFunction(e) {
  if (e.target.classList.contains("addToCartCartButton")) {
    let idToAddToCart = e.target.parentNode.parentNode.parentNode.id;
    const productURL = `https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts/${idToAddToCart}`;
    const result = await fetch(productURL);
    const product = await result.json();

    let myCart = [];
    if (localStorage.getItem("cart") == null) {
      myCart.push({ ...product, quantity: 1 });
    } else {
      myCart = JSON.parse(localStorage.getItem("cart"));
      const productInCart = myCart.find(
        (productFromCart) => productFromCart.id == product.id
      );
      if (productInCart != undefined) {
        productInCart.quantity++;
      } else {
        const productToAddToCart = { ...product, quantity: 1 };
        myCart.push(productToAddToCart);
      }
    }
    if (myCart.length > 0) localStorage.setItem("cart", JSON.stringify(myCart));
  }

  //
}

function detailsFunction(e) {
  if (e.target.classList.contains("detilasCardButton")) {
    let detailsID = e.target.parentNode.parentNode.parentNode.id;
    location.href = `details.html?product-id=${detailsID}`;
  }
}
