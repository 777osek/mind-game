let section = document.querySelector("section");
let mindMovesCount = document.querySelector("span");
let mindMoves = 8;

mindMovesCount.textContent = mindMoves;

let getData = () => [
    { imgSrc: "./images/image-1.png", name: "images-1"},
    { imgSrc: "./images/image-2.png", name: "images-2"},
    { imgSrc: "./images/image-3.png", name: "images-3"},
    { imgSrc: "./images/image-4.png", name: "images-4"},
    { imgSrc: "./images/image-5.png", name: "images-5"},
    { imgSrc: "./images/image-6.png", name: "images-6"},
    { imgSrc: "./images/image-1.png", name: "images-1"},
    { imgSrc: "./images/image-2.png", name: "images-2"},
    { imgSrc: "./images/image-3.png", name: "images-3"},
    { imgSrc: "./images/image-4.png", name: "images-4"},
    { imgSrc: "./images/image-5.png", name: "images-5"},
    { imgSrc: "./images/image-6.png", name: "images-6"},
];

let shuffle = () => {
    let deckData = getData();
    deckData.sort(() => Math.random() - 0.5);
    return deckData;
};

let deckCreator = () => {
    let deckData = shuffle();
    deckData.forEach((item) => {
        let deck = document.createElement("div");
    let front = document.createElement("img");
    let back = document.createElement("div");
    deck.classList = "deck";
    front.classList = "front";
    back.classList = "back";
    section.appendChild(deck);
    deck.appendChild(front);
    deck.appendChild(back);
    });
};

deckCreator();