const adminContainer = document.querySelector(".adminContainer");
const adminCard = document.querySelector(".adminCard");
let editButton = document.querySelector(".editProductButton");
let removeButon = document.querySelector(".removeProductButton");
const editMenu = document.querySelector(".editproduct");
const addNewProduct = document.getElementById("addNewProduct");
const closeEditBtn = document.getElementById("closeEdit");
let newAdminCard;
// edit or add variables
const newProductTitle = document.getElementById("newProductTitle");
const newShortDescription = document.getElementById("newShortDescription");
const newProductPrice = document.getElementById("newProductPrice");
const newProductImage = document.getElementById("newProductImage");
const saveButton = document.getElementById("saveEdit");
let idToDelte;

fetch("https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((element) => {
      newAdminCard = document.createElement("div");
      newAdminCard.id = element.id;
      // create card (picture, title, short description, price) !except buttons
      newAdminCard.innerHTML = `     
      <div class="adminImg"><img src="${element.img}" alt="Cannot show picture"></div>
      <div class="adminTitle">${element.title}</div>
      <div class="adminDescription">${element.description}</div>
      <div class="adminPrice"> ${element.price} RON</div>`;
      ///edit button create
      editButton = document.createElement("button");
      editButton.classList.add("buttonProduct");
      editButton.classList.add("editProductButton");
      editButton.innerHTML = `<i class="fas fa-edit"></i>Edit`;
      newAdminCard.appendChild(editButton);
      //remove button create
      removeButon = document.createElement("button");
      removeButon.classList.add("buttonProduct");
      removeButon.classList.add("removeProductButton");
      removeButon.innerHTML = `<i class="fas fa-window-close removeProductButton"></i>Remove Product`;
      newAdminCard.appendChild(removeButon);
      newAdminCard.classList.add("adminCard");
      adminContainer.appendChild(newAdminCard);
      // add event listeners for card buttons
      editButton.addEventListener("click", showEditMenu);
      removeButon.addEventListener("click", removeProduct);
    });
  });

closeEditBtn.addEventListener("click", closeEditMenu);
addNewProduct.addEventListener("click", addNewProductFunction);
saveButton.addEventListener("click", addProductToAPI);

function showEditMenu(e) {
  editMenu.classList.remove("editAnimation");
  editMenu.classList.remove("hidden");
  editMenu.classList.add("editAnimationOpen");
  setTimeout(() => {
    editMenu.classList.remove("editAnimationOpen");
  }, 700);
  if ((e.target.id = "addNewProduct")) {
    document.getElementById("editCardTitle").innerHTML =
      "Edit existing product";
    //add fucntions to edit product below
    console.log(e.target);
    console.log("edit prod");
  }
}

function addNewProductFunction(e) {
  editMenu.classList.remove("editAnimation");
  editMenu.classList.remove("hidden");
  editMenu.classList.add("editAnimationOpen");
  setTimeout(() => {
    editMenu.classList.remove("editAnimationOpen");
  }, 700);
  if ((e.target.id = "addNewProduct")) {
    document.getElementById("editCardTitle").innerHTML = "Add new product";
    //add function to add product below
    console.log(e.target);
    console.log("add prod");
  }
}
function closeEditMenu() {
  editMenu.classList.add("editAnimation");
  setTimeout(() => {
    editMenu.classList.add("hidden");
  }, 700);
}

function removeProduct(event) {
  if (event.target.classList.contains("removeProductButton")) {
    event.target.parentNode.remove();
    // add function to remove data from api below
    idToDelte = event.target.parentNode.id;
    console.log(idToDelte);
    removeFromAPI();
  }
}

async function addProductToAPI() {
  var response = await fetch(
    `https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${newProductTitle.value}`,
        description: `${newShortDescription.value}`,
        price: newProductPrice.value,
        img: `${newProductImage.value}`,
      }),
    }
  );
  setTimeout(() => {
    closeEditMenu();
  }, 700);
}
async function removeFromAPI() {
  var response = await fetch(
    `https://61ed969d634f2f00170cec8b.mockapi.io/perimetruProducts/${idToDelte}`,
    {
      method: "delete",
    }
  );
  setTimeout(() => {
    closeEditMenu();
  }, 700);
}
