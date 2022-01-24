var adminContainer = document.querySelector(".adminContainer");
var newAdminCard;

fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      newAdminCard = document.createElement("div");
      newAdminCard.id = data[i].id;
      newAdminCard.innerHTML = `
      <div class="adminCard">
      <div class="adminImg"><img src="${data[i].img}" alt="Cannot show picture"></div>
      <div class="adminDescription">${data[i].description}</div>
      <div class="adminPrice"> ${data[i].price} RON</div>
      <button onclick="showEditMenu()" class="buttonProduct editProductButton"><i class="fas fa-edit"></i><p>Edit</p></button>
      <button  class="buttonProduct removeProductButton"><i class="fas fa-window-close"></i><p>Remove Product</p></button>
      
    </div>
      `;
      adminContainer.appendChild(newAdminCard);
    }
  });

function showEditMenu() {
  console.log("test");
}
