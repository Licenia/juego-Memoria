export const mostrarCartas = () => {
  const cards = document.querySelectorAll(".card-inner");

  cards.forEach((card) => {
    card.classList.add("is-flipped");
  });

  setTimeout( () => {
    cards.forEach((card) => {
      card.classList.remove("is-flipped");
    });
  }, 5000);
};
