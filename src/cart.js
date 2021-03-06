let totalPrice = 0;

window.addEventListener("load", () => {
  document.querySelector(".sucess").classList.add("hidden");
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    cart.forEach((product) => {
      totalPrice =
        totalPrice + Number(product.price) * Number(product.quantity);
    });

    const productCards = cart
      .map(
        (product) =>
          `<div class="cartCard">
      				<div class="cartCardBody">
        					<h5 class="cartCardTitle">${product.title}</h5>
                  <div class="cartImgContainer">
                  <img class="cartCardImg" src="${product.img}" alt="No Image">
                  </div>
        					<p class="cartCardPrice">${product.price}</p>
        					<p class="cardNrProducts">Quantity:
		  						<button id=${product.id} class="decrement cartButton"> - </button>
					 				<span class="productsQuantity">${product.quantity}</span>
								<button id=${product.id} class="increment cartButton"> + </button>
							</p>
      				</div>
						<button id=${product.id} class="delete btn btn-dark"> &#128465;</button>
    			</div>`
      )
      .join("");
    bigCartContainer.addEventListener("click", cartActions);
    document.querySelector(".cartContainer").innerHTML = productCards;
    document.querySelector(".totalPrice").innerHTML =
      "Total Price: " + totalPrice.toFixed(2) + " RON";
  }
});
const bigCartContainer = document.querySelector(".cartContainer");

function cartActions(e) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  // Total price
  document.querySelector(".totalPrice").innerHTML =
    "Total Price: " + totalPrice.toFixed(2) + " RON";
  const productInCart = cart.find(
    (productFromCart) => productFromCart.id == e.target.id
  );

  // increase qty
  if (e.target.classList.contains("increment")) {
    productInCart.quantity++;
    e.target.previousElementSibling.innerHTML = productInCart.quantity;
    if (productInCart.quantity >= 1) {
      totalPrice += Number(productInCart.price);
      document.querySelector(".totalPrice").innerHTML =
        "Total Price: " + totalPrice.toFixed(2) + " RON";
    }

    // decrese qty
  } else if (e.target.classList.contains("decrement")) {
    if (productInCart.quantity > 1) {
      productInCart.quantity--;
      e.target.nextElementSibling.innerHTML = productInCart.quantity;

      totalPrice -= Number(productInCart.price);
      document.querySelector(".totalPrice").innerHTML =
        "Total Price: " + totalPrice.toFixed(2) + " RON";
    }

    // delete product
  } else if (e.target.classList.contains("delete")) {
    totalPrice -= Number(productInCart.price) * productInCart.quantity;
    productInCart.quantity = 0;
    cart = cart.filter((product) => product.id != productInCart.id);

    document.querySelector(".totalPrice").innerHTML =
      "Total Price: " + totalPrice.toFixed(2) + " RON";
    e.target.parentNode.remove();
  }
  // local storage update
  localStorage.setItem("cart", JSON.stringify(cart));
}
document.querySelector(".finalShopping").addEventListener("click", () => {
  let successMsg = document.querySelector(".sucess");
  successMsg.classList.remove("hidden");
});
