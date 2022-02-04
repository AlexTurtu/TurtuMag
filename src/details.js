window.addEventListener("load", async () => {
  let searchParamString = window.location.search;
  let cartContent = [];
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
         <button data-product-id=${product.id} class="add-to-cart btn btn-primary">Add to cart</button>
         <button onclick="location.href='store.html'" class="btn btn-primary">Go back to store</button>
       </div>
  </div>
</div>`;

  document.querySelector(".detailsContainer").innerHTML = productCard;
  document
    .querySelector(".add-to-cart")
    .addEventListener("click", function addToCartTest(e) {
      //add to cart function below
      product.quantity++;
      if (e.target.classList.contains("add-to-cart")) {
        let itemToAddToCart = JSON.stringify(product);
        cartContent = [...cartContent, itemToAddToCart];
        localStorage.setItem("cart", JSON.stringify(cartContent));
      }
    });
});
