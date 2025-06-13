import { mostrarCartas } from "./game.js";

const $cards = document.querySelector(".cards-container"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Fresa",
      img: "./public/fresa.png",
    },
    {
      title: "Naranja",
      img: "./public/naranja.png",
    },
    {
      title: "Aguacate",
      img: "./public/palta.png",
    },
    {
      title: "Pera",
      img: "./public/pera.png",
    },
    {
      title: "Lechuga",
      img: "./public/repollo.png",
    },
  ];

const allCards = [...cardContent, ...cardContent];

allCards.sort(() => Math.random() - 0.5);

allCards.forEach((el) => {
  let $clone = document.importNode($template, true);

  $clone
    .querySelector(".card-front img")
    .setAttribute("src", "./public/img004.jpg");
  $clone.querySelector(".card-front img").setAttribute("alt", "Reverso");

  $clone.querySelector(".card-back img").setAttribute("src", el.img);
  $clone.querySelector(".card-back img").setAttribute("alt", el.title);
  $clone.querySelector("figcaption").textContent = el.title;

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

const $contenedorVidas = document.querySelector(".lives"),
  $templateVidas = document.getElementById("vidas").content,
  $fragmentVidas = document.createDocumentFragment();

for (let i = 1; i < 4; i++) {
  let $clone2 = document.importNode($templateVidas, true);
  $clone2.querySelector("img").setAttribute("src", "./public/corazon.png");
  $clone2.querySelector("img").setAttribute("alt", "Corazon");

  $fragmentVidas.appendChild($clone2);
}

$contenedorVidas.appendChild($fragmentVidas);

const iniciarJuego = document.getElementById("empezar-juego");
iniciarJuego.addEventListener("click", () => {
  mostrarCartas();
});
