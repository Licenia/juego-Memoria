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

  const cardInner = $clone.querySelector(".card-inner");
  $clone.querySelector(".card").addEventListener("click", () => {
    cardInner.classList.toggle("is-flipped");
  });

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
