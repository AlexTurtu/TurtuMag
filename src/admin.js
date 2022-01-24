var adminContainer = document.querySelector(".adminContainer");
var editButton;
var newAdminCard;
var removeButon;

fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      newAdminCard = document.createElement("div");
      //picture, title, description, price
      newAdminCard.innerHTML = `     
      <div class="adminImg"><img src="${data[i].img}" alt="Cannot show picture"></div>
      <div class="adminTitle">${data[i].title}</div>
      <div class="adminDescription">${data[i].description}</div>
      <div class="adminPrice"> ${data[i].price} RON</div>`;
      editButton = document.createElement("button");
      editButton.classList.add("buttonProduct");
      editButton.classList.add("editProductButton");
      editButton.innerHTML = `<i class="fas fa-edit"></i><p>Edit</p>`;
      newAdminCard.appendChild(editButton);
      removeButon = document.createElement("button");
      removeButon.classList.add("buttonProduct");
      removeButon.classList.add("removeProductButton");
      removeButon.innerHTML = `<i class="fas fa-window-close"></i><p>Remove Product</p>`;
      newAdminCard.appendChild(removeButon);
      newAdminCard.classList.add("adminCard");
      adminContainer.appendChild(newAdminCard);
    }
  });

var editButton = document.querySelector(".adminCard");

editButton.addEventListener("click", showEditMenu);

function showEditMenu() {
  console.log("clicked!");
}
