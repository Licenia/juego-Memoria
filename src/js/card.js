const $cards = document.querySelector(".cards-container"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),

cardContent = [
{
    title: "Fresa",
    img: "./public/fresa.png"
},
{
    title: "Naranja",
    img: "./public/naranja.png"
},
{
    title: "Aguacate",
    img: "./public/palta.png"
},
{
    title: "Pera",
    img: "./public/pera.png"
},
{
    title: "Lechuga",
    img: "./public/repollo.png"
}
]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment);








