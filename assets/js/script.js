const section = document.querySelector("section");
const mindMovesCount = document.querySelector("span");
let mindMoves = 8;

mindMovesCount.textContent = mindMoves;

const getImages = () => [
    { imgSrc: "assets/images/learning-1.png", name: "learning-1", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-2.png", name: "learning-2", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-3.png", name: "learning-3", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-4.png", name: "learning-4", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-5.png", name: "learning-5", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-6.png", name: "learning-6", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-7.png", name: "learning-7", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-8.png", name: "learning-8", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-1.png", name: "learning-1", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-2.png", name: "learning-2", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-3.png", name: "learning-3", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-4.png", name: "learning-4", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-5.png", name: "learning-5", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-6.png", name: "learning-6", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-7.png", name: "learning-7", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-8.png", name: "learning-8", alt: "Mind picture"},
    ];

const shuffle = () => {
    const deckImages = getImages();
    deckImages.sort(() => Math.random() - 0.5);
    return deckImages;
};

const deckCreator = () => {
    const deckImages = shuffle();
    deckImages.forEach((item) => {
        const deck = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("div");
        deck.classList = "deck";
        front.classList = "front";
        back.classList = "back";
        front.src = item.imgSrc;
        deck.setAttribute("name", item.name);
        front.setAttribute("alt", item.alt); 
        section.appendChild(deck);
        deck.appendChild(front);
        deck.appendChild(back);
        deck.addEventListener("click", (e) => {
            deck.classList.toggle("toggleDeck");
            checkDecks(e);
        });
    });
};

const checkDecks = (e) => {
    const clickedDeck = e.target;
    clickedDeck.classList.add("turned");
    const turnedDecks = document.querySelectorAll(".turned");
    const toggleDeck = document.querySelectorAll(".toggleDeck");
    if (turnedDecks.length === 2) {
        if (
            turnedDecks[0].getAttribute("name") === 
            turnedDecks[1].getAttribute("name")
            ) {
                console.log("match"); //This checks for a match
                turnedDecks.forEach((deck) => {
                    deck.classList.remove("turned");
                    deck.style.pointerEvents = "none";
                });
            } else {
                console.log("wrong"); //This checks for no match
                turnedDecks.forEach((deck) => {
                    deck.classList.remove("turned");
                    setTimeout(() => deck.classList.remove("toggleDeck"), 1000);
                });
                mindMoves --;
                mindMovesCount.textContent = mindMoves;
                if (mindMoves === 0) {
                    restart("Good work - You are almost there 😃"); //Result message when the game is not solved
                }
            }
        }
        if (toggleDeck.length === 16) {
            setTimeout(() => {
                restart("Yes You made 😍 IT !"); //Result message when the game is solved
            }, 2500);
        }
    };

const restart = (message) => {
    const deckImages = shuffle();
    const front = document.querySelectorAll(".front");
    const deck = document.querySelectorAll(".deck");
    section.style.pointerEvents = "none";
    deckImages.forEach((item, index) => {
        deck[index].classList.remove("toggleDeck");
        setTimeout(() => {
            deck[index].style.pointerEvents = "all";
            front[index].src = item.imgSrc;
            deck[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    mindMoves = 8;
    mindMovesCount.textContent = mindMoves;
    setTimeout(() => window.alert(message), 500);
};

deckCreator();