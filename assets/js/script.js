/**
 * The goal is to build/create a menory game based on, give the player a greatfull mind when they play
 * First we set the declartion of the menory game area "section" and how many moves the player has to solve the game on
 * Second is to declare all menory game images in the function "getImages"
 * Then shuffle (mix) all images in a function called "shuffle"
 * Then the function "deckCreator" builds/creats the html parts in the mamory game area "section" in the index.html
 * Check if palyer has clicked on the menory game board in the function "checkDecks" if a match or if not a match, also the end result message win or loose
 * After win or loose the function "restart" is called and present the end result message to the screen
 * Final is activate the function "deckCreator"
 */

// Declaration of the memory game area & player moves
const memoryGame = document.querySelector(".game-area");
const mindMovesCount = document.querySelector("span");
let mindMoves = 8;

// Set the start value of player moves per menory game
mindMovesCount.textContent = mindMoves;


// Set the array of all memory game images
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

// Start to shuffles/mixing all memory game images
const shuffle = () => {
    const deckImages = getImages();
    deckImages.sort(() => Math.random() - 0.5);
    return deckImages;
};

// Builds/creates the memory game area in the index.html page under "section"
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
        memoryGame.appendChild(deck);
        deck.appendChild(front);
        deck.appendChild(back);
        deck.addEventListener("click", (e) => {
            deck.classList.toggle("toggleDeck");
            checkDecks(e);
        });
    });
};

// Check players clicks on the memory game board, if it is a match or not 
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
                turnedDecks.forEach((deck) => {
                    deck.classList.remove("turned");
                    deck.style.pointerEvents = "none";
                });
            } else {
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

// Resets the memory game and present win or loose message on the screen    
const restart = (message) => {
    const deckImages = shuffle();
    const front = document.querySelectorAll(".front");
    const deck = document.querySelectorAll(".deck");
    memoryGame.style.pointerEvents = "none";
    deckImages.forEach((item, index) => {
        deck[index].classList.remove("toggleDeck");
        setTimeout(() => {
            deck[index].style.pointerEvents = "all";
            front[index].src = item.imgSrc;
            deck[index].setAttribute("name", item.name);
            memoryGame.style.pointerEvents = "all";
        }, 1000);
    });
    mindMoves = 8;
    mindMovesCount.textContent = mindMoves;
    setTimeout(() => window.alert(message), 500);
};

// Activates the building of the html parts for the memory game
deckCreator();