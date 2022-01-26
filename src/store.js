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

fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
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
      // detilasCardDiv = document.createElement("div");
      // detilasCardDiv.classList.add("detailsBTN");
      // cardButtons.appendChild(detilasCardDiv);
      detailsButton = document.createElement("button");
      detailsButton.classList.add("btn-grad");
      detailsButton.classList.add("detilasCardButton");
      detailsButton.innerHTML = `<i id="detilsIcon" class="fas fa-info-circle"></i>Details`;
      cardButtons.appendChild(detailsButton);
      addToCart = document.createElement("button");
      addToCart.classList.add("btn-grad");
      addToCart.classList.add("addToCartCardButton");
      addToCart.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to Cart`;
      cardButtons.appendChild(addToCart);
      addToCart.addEventListener("click", addToCartFunction);
      detailsButton.addEventListener("click", detailsFunction);
    }
  });
function addToCartFunction(e) {
  if (e.target.classList.contains("addToCartCardButton")) {
    console.log(e.target);
  }
}
function detailsFunction(e) {
  if (e.target.classList.contains("detilasCardButton")) {
    console.log(e.target);
    window.location.href = "details.html";
  }
}
