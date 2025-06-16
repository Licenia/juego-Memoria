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

let idTiempo;
let contador = 50;
export function temporizador() {
  idTiempo = setInterval(() => {
    let tiempo = document.getElementById("tiempo");
    tiempo.innerHTML = `00:${contador.toString().padStart(2, "0")}`;
    contador--;

    if (contador < 0) {
      clearInterval(idTiempo);
    }
  }, 1000);
}

let juegoTerminado = false;
let puntaje = 0;
let paresEncontrados = 0;
const totalPares = 5;

function controlarJuego() {
  let primeraCarta = null;
  let segundaCarta = null;

  const contenedor = document.querySelector(".cards-container");

  contenedor.addEventListener("click", (e) => {
    if (juegoTerminado) return;
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
        actualizarPuntaje(20);
        paresEncontrados++;

        if (paresEncontrados === totalPares) {
          mostrarMensajeVictoria();
        }
        primeraCarta = null;
        segundaCarta = null;
      } else {
        gestionarVidas(vidas);

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

function gestionarVidas() {
  const corazones = document.querySelectorAll(".lives img");

  if (corazones.length > 0) {
    corazones[corazones.length - 1].remove();
  }
  if (corazones.length === 1) {
    juegoTerminado = true;
    setTimeout(() => {
      mostrarMensajePerdiste();
    }, 800);
  }
}

function actualizarPuntaje(valor) {
  puntaje += valor;
  document.getElementById("puntaje").textContent = puntaje;
}

function mostrarMensajePerdiste() {
  const mensajePerdiste = document.getElementById("mensaje-final"),
    puntajeFinal = document.getElementById("puntaje-final");

  puntajeFinal.textContent = `Puntaje obtenido: ${puntaje} puntos`;
  mensajePerdiste.classList.remove("oculto");
}

function mostrarMensajeVictoria() {
  const mensajeVictoria = document.getElementById("mensaje-victoria");
  puntajeFinal = document.getElementById("puntaje-final");

  puntajeFinal.textContent = `Puntaje obtenido: ${puntaje} puntos`;
  mensajeVictoria.classList.remove("oculto");
}
