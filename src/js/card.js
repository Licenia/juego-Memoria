import { mostrarCartas, temporizador} from "./game.js";

const $cards = document.querySelector(".cards-container"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Fresa",
      img: "/fresa.png",
    },
    {
      title: "Naranja",
      img: "/naranja.png",
    },
    {
      title: "Aguacate",
      img: "/palta.png",
    },
    {
      title: "Pera",
      img: "/pera.png",
    },
    {
      title: "Lechuga",
      img: "/repollo.png",
    },
    {
      title: "Platano",
      img: "/platano.png",
    }
  ];

let pares;
if (window.innerWidth < 600) {
  pares = 4;
}else{
  pares = 6;
}

let cartasSeleccionadas = cardContent.slice(0, pares);

const allCards = [...cartasSeleccionadas, ...cartasSeleccionadas];
allCards.sort(() => Math.random() - 0.5);

allCards.forEach((el) => {
  let $clone = document.importNode($template, true);

  $clone
    .querySelector(".card-front img")
    .setAttribute("src", "/cat.jpg");
  $clone.querySelector(".card-front img").setAttribute("alt", "Reverso");


  $clone.querySelector(".card-back img").setAttribute("src", el.img);
  $clone.querySelector(".card-back img").setAttribute("alt", el.title);

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

export const totalPares = pares;

const $contenedorVidas = document.querySelector(".lives"),
  $templateVidas = document.getElementById("vidas").content,
  $fragmentVidas = document.createDocumentFragment();

for (let i = 1; i < 4; i++) {
  let $clone2 = document.importNode($templateVidas, true);
  $clone2.querySelector("img").setAttribute("src", "/corazon.png");
  $clone2.querySelector("img").setAttribute("alt", "Corazon");

  $fragmentVidas.appendChild($clone2);
}

$contenedorVidas.appendChild($fragmentVidas);

const iniciarJuego = document.getElementById("empezar-juego");

iniciarJuego.addEventListener("click", () => {
  const navegacion = document.getElementById("navegacion"),
  tableroJuego = document.getElementById("cards-container"),
  subtitulo = document.querySelector("h2"),
  parrafo = document.querySelector("p");

  iniciarJuego.classList.add("oculto");
  subtitulo.classList.add("oculto");
  parrafo.classList.add("oculto");
  navegacion.classList.remove("oculto");
  tableroJuego.classList.remove("oculto");

  temporizador();
  mostrarCartas();
});


document.getElementById("btn-reiniciar").addEventListener("click", () => {
  location.reload();
});

document.getElementById("btn-reiniciar-perder").addEventListener("click", () => {
  location.reload();
});

