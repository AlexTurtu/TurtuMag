window.addEventListener("load", async () => {
  let searchParamString = window.location.search;

  const searchParam = new URLSearchParams(searchParamString);
  const productId = searchParam.get("product-id");

  const productURL = `https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts/${productId}`;
  const result = await fetch(productURL);
  const product = await result.json();

  const productCard = `
  <div class="detailsCard" id="${product.id}">
  <div class="detailsTitle">${product.title}</div>
  <div class="deatailCardContent">
    <div class="detailsCardImg">
     <img class="cardImgItSelf" src="${product.img}" alt="No Image">
    </div>
       <div class="detailsCardText">
         <div class="longDescription">${product.longDescription}</div>
         <div class="detailsCardPrice">Price: ${product.price}</div>
         <div class="detailsCardQty">Quantity: ${product.quantity}
       </div>
       <div class="detailsCardButtons">
         <button data-product-id=${product.id} class="addToCartCartButton btn btn-primary">Add to cart</button>
         <button onclick="location.href='store.html'" class="btn btn-primary">Go back to store</button>
       </div>
  </div>
</div>`;

  document.querySelector(".detailsContainer").innerHTML = productCard;
  document
    .querySelector(".addToCartCartButton")
    .addEventListener("click", addToCartFunction);
});

async function addToCartFunction(e) {
  if (e.target.classList.contains("addToCartCartButton")) {
    let idToAddToCart = e.target.parentNode.parentNode.parentNode.parentNode.id;
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
}
