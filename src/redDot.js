window.addEventListener("click", () => {
  setTimeout(changeRedDot, 500);
});
window.addEventListener("load", changeRedDot);

function changeRedDot() {
  let carthere = JSON.parse(localStorage.getItem("cart"));
  let redDot = document.querySelector(".cartRedIcon");

  let totalInCart = 0;

  for (let i = 0; i < carthere.length; i++) {
    totalInCart = totalInCart + carthere[i].quantity;
    console.log(totalInCart);
  }
  if (totalInCart > 0) {
    redDot.innerHTML = totalInCart;
    redDot.classList.remove("hidden");
  } else if (totalInCart == 0) {
    redDot.classList.add("hidden");
  }
}
