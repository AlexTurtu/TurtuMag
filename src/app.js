// fill the cards with data from the MockAPI

var cardContainer = document.querySelector(".cardContainer");
var newCard;
fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      newCard = document.createElement("div");
      newCard.id = data[i].id;
      newCard.innerHTML = `
      <div  id="${data[i].id}"class="card">
      <!-- CARD START  -->
      <div class="img">
        <img class="cardImg" src="${data[i].img}" alt="No Image">
      </div>
      <div class="cardBottom">
        <div class="shortDescription"> <p id="productTitle">${data[i].title}</p>
          <p id="productDescription">${data[i].description}</p>

        </div>
        <div class="cardPrice">Price: ${data[i].price} RON</div>
        <div class="cardButtons">
          <div class="detailsBTN">
            <button class="btn-grad" id="detilsBtnID" onclick="document.location='details.html'"><i id="detilsIcon" class="fas fa-info-circle"></i>Details</button>
          </div>
          <div class="addToCart">
            <button class="btn-grad" id="addToCartID">Add to Cart<i class="fas fa-shopping-cart"></i></button>
          </div>
        </div>
      </div>
      <!-- CARD END  -->

    <!-- END OF CARD CONTAINER  -->
  </div>
      `;
      cardContainer.appendChild(newCard);
    }
  });
