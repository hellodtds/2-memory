// PageTransitionEvent
window.addEventListener('pageshow', function(event){
    console.log("hello, let's play! ");

})


// Initial card list
const list = [
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-bolt",
    "fa-cube",
    "fa-anchor",
    "fa-leaf",
    "fa-bicycle",
    "fa-diamond",
    "fa-bomb",
    "fa-leaf",
    "fa-bomb",
    "fa-bolt",
    "fa-bicycle",
    "fa-paper-plane-o",
    "fa-cube"
];

// Header
const HEADER = document.querySelector('header');
const H1 = document.querySelector('h1');

// Score Panel
const SCORE_PANEL = document.querySelector('.score-panel');
const STARS = document.querySelector('.stars');
const MOVES = document.querySelector('.moves');
const RESTART = document.querySelector('.restart');

// Deck
const DECK = document.querySelector('.deck');



// add multiple classes using spread syntax, $0.classList.add(...showCard)
const SHOW_CARD = ['show', 'open'];











// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




