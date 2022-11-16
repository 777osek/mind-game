const section = document.querySelector("section");
const mindMovesCount = document.querySelector("span");
const mindMoves = 8;

mindMovesCount.textContent = mindMoves;

const getData = () => [
    { imgSrc: "/assets/images/learning-1.jpg", name: "learning-1"},
    { imgSrc: "/assets/images/learning-2.jpg", name: "learning-2"},
    { imgSrc: "/assets/images/learning-3.jpg", name: "learning-3"},
    { imgSrc: "/assets/images/learning-4.jpg", name: "learning-4"},
    { imgSrc: "/assets/images/learning-5.jpg", name: "learning-5"},
    { imgSrc: "/assets/images/learning-6.jpg", name: "learning-6"},
    { imgSrc: "/assets/images/learning-7.jpg", name: "learning-7"},
    { imgSrc: "/assets/images/learning-8.jpg", name: "learning-8"},
    { imgSrc: "/assets/images/learning-1.jpg", name: "learning-1"},
    { imgSrc: "/assets/images/learning-2.jpg", name: "learning-2"},
    { imgSrc: "/assets/images/learning-3.jpg", name: "learning-3"},
    { imgSrc: "/assets/images/learning-4.jpg", name: "learning-4"},
    { imgSrc: "/assets/images/learning-5.jpg", name: "learning-5"},
    { imgSrc: "/assets/images/learning-6.jpg", name: "learning-6"},
    { imgSrc: "/assets/images/learning-7.jpg", name: "learning-7"},
    { imgSrc: "/assets/images/learning-8.jpg", name: "learning-8"},
    ];

const shuffle = () => {
    const deckData = getData();
    deckData.sort(() => Math.random() - 0.5);
    return deckData;
};

const deckCreator = () => {
    const deckData = shuffle();
    deckData.forEach((item) => {
        const deck = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("div");
        deck.classList = "deck";
        front.classList = "front";
        back.classList = "back";
        front.src = item.imgSrc
        section.appendChild(deck);
        deck.appendChild(front);
        deck.appendChild(back);
    });
};

deckCreator();