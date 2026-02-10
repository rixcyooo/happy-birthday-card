const card = document.querySelector(".card");

card.addEventListener("touchstart", () => {
  card.classList.toggle("open");
});
