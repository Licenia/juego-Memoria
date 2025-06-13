export const mostrarCartas = () => {
  const cards = document.querySelectorAll(".card-inner");

  cards.forEach((card) => {
    card.classList.add("is-flipped");
  });

  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove("is-flipped");
    });
  }, 5000);
};

const idTiempo = setInterval(temporizador, 1000);

let contador = 50;
function temporizador() {
  let tiempo = document.getElementById("tiempo");
  tiempo.innerHTML = `00:${contador.toString().padStart(2, "0")}`;
  contador--;

  if (contador < 0) {
    clearInterval(idTiempo);
  }
}
