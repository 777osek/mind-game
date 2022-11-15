let section = document.querySelector("section");
let mindMovesCount = document.querySelector("span");
let mindMoves = 8;

mindMovesCount.textContent = mindMoves;

let getData = () => [
    { imgSrc: "./images/image-1", name: "images-1"},
    { imgSrc: "./images/image-2", name: "images-2"},
    { imgSrc: "./images/image-3", name: "images-3"},
    { imgSrc: "./images/image-4", name: "images-4"},
    { imgSrc: "./images/image-5", name: "images-5"},
    { imgSrc: "./images/image-6", name: "images-6"},
    { imgSrc: "./images/image-1", name: "images-1"},
    { imgSrc: "./images/image-2", name: "images-2"},
    { imgSrc: "./images/image-3", name: "images-3"},
    { imgSrc: "./images/image-4", name: "images-4"},
    { imgSrc: "./images/image-5", name: "images-5"},
    { imgSrc: "./images/image-6", name: "images-6"},
];

let shuffle = () => {
    let deckData = getData();
    console.log(deckData)
};

