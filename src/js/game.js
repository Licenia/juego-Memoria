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

function controlarJuego() {
  let primeraCarta = null;
  let segundaCarta = null;

  const contenedor = document.querySelector(".cards-container");

  contenedor.addEventListener("click", (e) => {
    const cardInner = e.target.closest(".card-inner");

    if (
      !cardInner ||
      cardInner.classList.contains("is-flipped") ||
      cardInner === primeraCarta
    )
      return;

    cardInner.classList.add("is-flipped");

    if (!primeraCarta) {
      primeraCarta = cardInner;
    } else {
      segundaCarta = cardInner;

      const img1 = primeraCarta
        .querySelector(".card-back img")
        .getAttribute("src");
      const img2 = segundaCarta
        .querySelector(".card-back img")
        .getAttribute("src");

      if (img1 === img2) {
        primeraCarta = null;
        segundaCarta = null;

        console.log("Es un par");
      } else {
        console.log("No acertaste");

        setTimeout(() => {
          primeraCarta.classList.remove("is-flipped");
          segundaCarta.classList.remove("is-flipped");
          primeraCarta = null;
          segundaCarta = null;
        }, 1000);
      }
    }
  });
}

controlarJuego();
