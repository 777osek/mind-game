/**
 * The goal is to create a memory game based on positive thinking, give the player a grateful mind when they play
 * 1) The DOM declaration of the memory game area and how many moves the player has to solve the game on
 * 2) Declare an array function for all memory game images
 * 3) Shuffle (mix) all images
 * 4) The function "cardCreator" creates the html parts for the memory game area to the class "game-area" in the index.html
 * 5) Checker - if the player has clicked on the memory game area (board) to check if it is a match or not a match, also the end result message win or loose
 * 6) After win or loose the result message is presented to the screen, and when OK is clicked the game is reset
 * 7) Here is the function "cardCreator" activated [Item 4]
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

// Start to shuffle/mixing the memory game card images
const shuffle = () => {
    const cardImages = getImages();
    cardImages.sort(() => Math.random() - 0.5);
    return cardImages;
};

// Creates the memory game area in the index.html page under "section class="game-area"
const cardCreator = () => {
    const cardImages = shuffle();
    cardImages.forEach((item) => {
        const card = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        front.classList = "front";
        back.classList = "back";
        front.src = item.imgSrc;
        card.setAttribute("name", item.name);
        front.setAttribute("alt", item.alt); 
        gameAreaDom.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

// Check players clicks on the memory game board, if it is a match or not 
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("turned");
    const turnedCards = document.querySelectorAll(".turned");
    const toggleCard = document.querySelectorAll(".toggleCard");
    if (turnedCards.length === 2) {
        if (
            turnedCards[0].getAttribute("name") === 
            turnedCards[1].getAttribute("name")
            ) {
                turnedCards.forEach((card) => {
                    card.classList.remove("turned");
                    card.style.pointerEvents = "none";
                });
            } else {
                turnedCards.forEach((card) => {
                    card.classList.remove("turned");
                    setTimeout(() => card.classList.remove("toggleCard"), 1500);
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
    if (toggleCard.length === 16) {
        setTimeout(() => {
            restart("Yes You made 😍 IT !"); //Result message when the game is solved
        }, 1500);
    }
};

// Present a message win or loose as a window alert, when OK clicked it resets the memory game    
const restart = (message) => {
    window.alert(message);
    const cardImages = shuffle();
    const front = document.querySelectorAll(".front");
    const card = document.querySelectorAll(".card");
    gameAreaDom.style.pointerEvents = "none";
    cardImages.forEach((item, index) => {
        card[index].classList.remove("toggleCard");
        setTimeout(() => {
            card[index].style.pointerEvents = "all";
            front[index].src = item.imgSrc;
            card[index].setAttribute("name", item.name);
            gameAreaDom.style.pointerEvents = "all";
        }, 1000);
    });
    mindMoves = 8;
    mindMovesCount.textContent = mindMoves;
};

// Activates the building of the html parts for the memory game
cardCreator();