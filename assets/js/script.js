var section = document.querySelector("section");
var mindMovesCount = document.querySelector("span");
var mindMoves = 8;
var deckImages;

mindMovesCount.textContent = mindMoves;

var getImages = () => [
    { imgSrc: "assets/images/learning-1.jpg", name: "learning-1"},
    { imgSrc: "assets/images/learning-2.jpg", name: "learning-2"},
    { imgSrc: "assets/images/learning-3.jpg", name: "learning-3"},
    { imgSrc: "assets/images/learning-4.jpg", name: "learning-4"},
    { imgSrc: "assets/images/learning-5.jpg", name: "learning-5"},
    { imgSrc: "assets/images/learning-6.jpg", name: "learning-6"},
    { imgSrc: "assets/images/learning-7.jpg", name: "learning-7"},
    { imgSrc: "assets/images/learning-8.jpg", name: "learning-8"},
    { imgSrc: "assets/images/learning-1.jpg", name: "learning-1"},
    { imgSrc: "assets/images/learning-2.jpg", name: "learning-2"},
    { imgSrc: "assets/images/learning-3.jpg", name: "learning-3"},
    { imgSrc: "assets/images/learning-4.jpg", name: "learning-4"},
    { imgSrc: "assets/images/learning-5.jpg", name: "learning-5"},
    { imgSrc: "assets/images/learning-6.jpg", name: "learning-6"},
    { imgSrc: "assets/images/learning-7.jpg", name: "learning-7"},
    { imgSrc: "assets/images/learning-8.jpg", name: "learning-8"},
    ];

var shuffle = () => {
    deckImages = getImages();
    deckImages.sort(() => Math.random() - 0.5);
    return deckImages;
};

var deckCreator = () => {
    deckImages = shuffle();
    deckImages.forEach((item) => {
        var deck = document.createElement("div");
        var front = document.createElement("img");
        var back = document.createElement("div");
        deck.classList = "deck";
        front.classList = "front";
        back.classList = "back";
        front.src = item.imgSrc;
        deck.setAttribute("name", item.name); 
        section.appendChild(deck);
        deck.appendChild(front);
        deck.appendChild(back);
        deck.addEventListener("click", (e) => {
            deck.classList.toggle("toggleDeck");
            checkDecks(e);
        });
    });
};

var checkDecks = (e) => {
    var clickedDeck = e.target;
    clickedDeck.classList.add("turned");
    var turnedDecks = document.querySelectorAll(".turned");
    var toggleDeck = document.querySelectorAll(".toggleDeck");
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

var restart = (message) => {
    deckImages = shuffle();
    var front = document.querySelectorAll(".front");
    var deck = document.querySelectorAll(".deck");
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