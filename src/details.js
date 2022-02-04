window.addEventListener("load", async () => {
  let searchParamString = window.location.search;

  const searchParam = new URLSearchParams(searchParamString);
  const productId = searchParam.get("product-id");

  const productURL = `https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts/${productId}`;
  const result = await fetch(productURL);
  const product = await result.json();

  const productCard = `
		<div class="detailsCard" id="${product.id}">
			<div class="detailsCardHeader">
	  			Product Details
			</div>
			<div class="detailsCardBody>
	  			<h5 class="detailsCardTitle">${product.title}</h5>
                  <div class="img">
      <img class="cardImg" src="${product.img}" alt="No Image">
    </div>
	  			<p class="detailsCardDescription">${product.description}</p>
	  			<p class="detailsCardLongDescription">${product.longdescription}</p>
	  			<p class="card-text">${product.price}</p>
	  			<button data-product-id=${product.id} class="add-to-cart btn btn-primary">Add to cart</button>
	  			<button onclick="location.href='store.html'" class="add-to-cart btn btn-primary">Go back to store</button>
			</div>
 		</div>`;

  document.querySelector(".detailsContainer").innerHTML = productCard;
  document.querySelector(".add-to-cart").addEventListener("click", addToCart);
});
async function addToCart(e) {
  console.log(e.target.parentNode.parentNode.id);
}
