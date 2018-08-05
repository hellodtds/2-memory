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









