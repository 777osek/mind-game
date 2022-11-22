/**
 * The goal is to create a memory game based on positive thinking, give the player a grateful mind when they play
 * 1) The DOM declaration of the memory game area and how many moves the player has to solve the game on
 * 2) Declare an array function for all memory game images
 * 3) Shuffle (mix) all images
 * 4) The function "deckCreator" creates the html parts for the memory game area to the class "game-area" in the index.html
 * 5) Checker - if the player has clicked on the memory game area (board) to check if it is a match or not a match, also the end result message win or loose
 * 6) After win or loose the result message is presented to the screen, and when OK is clicked the game is reset
 * 7) Here is the function "deckCreator" activated [Item 4]
 */

// Declaration of the memory game area DOM & player moves 
const gameAreaDom = document.querySelector(".game-area");
const mindMovesCount = document.querySelector(".mind-moves-count");
let mindMoves = 8;

// Set the start value of player moves per memory game
mindMovesCount.textContent = mindMoves;


// Declare getImages as a array for all memory game images
const getImages = () => [
    { imgSrc: "assets/images/learning-1.webp", name: "learning-1", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-2.webp", name: "learning-2", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-3.webp", name: "learning-3", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-4.webp", name: "learning-4", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-5.webp", name: "learning-5", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-6.webp", name: "learning-6", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-7.webp", name: "learning-7", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-8.webp", name: "learning-8", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-1.webp", name: "learning-1", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-2.webp", name: "learning-2", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-3.webp", name: "learning-3", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-4.webp", name: "learning-4", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-5.webp", name: "learning-5", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-6.webp", name: "learning-6", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-7.webp", name: "learning-7", alt: "Mind picture"},
    { imgSrc: "assets/images/learning-8.webp", name: "learning-8", alt: "Mind picture"},
    ];

// Start to shuffle/mixing the memory game deck images
const shuffle = () => {
    const deckImages = getImages();
    deckImages.sort(() => Math.random() - 0.5);
    return deckImages;
};

// Creates the memory game area in the index.html page under "section class="game-area"
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
        gameAreaDom.appendChild(deck);
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
                    setTimeout(() => deck.classList.remove("toggleDeck"), 1500);
                });
                mindMoves --;
                mindMovesCount.textContent = mindMoves;
                if (mindMoves === 0) {
                    setTimeout(() => {
                    restart("Good work - You are almost there 😃"); //Result message when the game is not solved
                    }, 1500);
                }
            }
        }
    if (toggleDeck.length === 16) {
        setTimeout(() => {
            restart("Yes You made 😍 IT !"); //Result message when the game is solved
        }, 1500);
    }
};

// Present a message win or loose as a window alert, when OK clicked it resets the memory game    
const restart = (message) => {
    window.alert(message);
    const deckImages = shuffle();
    const front = document.querySelectorAll(".front");
    const deck = document.querySelectorAll(".deck");
    gameAreaDom.style.pointerEvents = "none";
    deckImages.forEach((item, index) => {
        deck[index].classList.remove("toggleDeck");
        setTimeout(() => {
            deck[index].style.pointerEvents = "all";
            front[index].src = item.imgSrc;
            deck[index].setAttribute("name", item.name);
            gameAreaDom.style.pointerEvents = "all";
        }, 1000);
    });
    mindMoves = 8;
    mindMovesCount.textContent = mindMoves;
};

// Activates the building of the html parts for the memory game
deckCreator();