window.addEventListener("load", () => {
  let carthere = JSON.parse(localStorage.getItem("cart"));
  let redDot = document.querySelector(".cartRedIcon");
  console.log(carthere.length);
  if (carthere.length > 0) {
    redDot.innerHTML = carthere.length;
    redDot.classList.remove("hidden");
  }
});
window.addEventListener("click", () => {
  let carthere = JSON.parse(localStorage.getItem("cart"));
  let redDot = document.querySelector(".cartRedIcon");
  console.log(carthere.length);
  if (carthere.length > 0) {
    redDot.innerHTML = carthere.length;
    redDot.classList.remove("hidden");
  }
});
