//array storing all card options
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

//array to store selected cardsInPlay
var cardsInPlay = [];

//***************************//

//function to create the game board
var createBoard = function() {
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//function to check whether two cards are selected and if they match
var checkForMatch = function(cardId) {
	document.getElementsByTagName('img')[cardId].setAttribute('src',cards[cardId].cardImage);//reveal card image
	//I wasn't able to get this to work using "this". My impression is that "this" only works if the function that 
	//is called (flipCard above) is a part of the variable that we want "this" to refer to (cardElement above).
	//Is this correct?

	//Added functionality:
	//	delays output so that cards show before alert.
	//	resets the game board if all cards have been turned over/matched.
	//	resets the game board if the first cards picked do not match.
	if (cardsInPlay.length != 0 && cardsInPlay.length % 2 === 0) {  //check whether two cards have been selected
		if (cardsInPlay[cardsInPlay.length-1] === cardsInPlay[cardsInPlay.length-2]) { //check whether selected cards match
			setTimeout(itsAMatch, 500); //output to user if cards match
			if (cardsInPlay.length === cards.length) { //reset board if all cards are turned over
				setTimeout(resetBoard, 500);
			}
		} else {
			setTimeout(tryAgain, 500); //output to user if cards do not match
			setTimeout(resetBoard, 500);
		}
	}
}

var itsAMatch = function () { //function to output match text
	alert("You've found a match!");
}
var tryAgain = function () { //function to output not a match text
	alert("Sorry, try again.");
}

//function to input card selections and determine if they match
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank); //tell user selected card rank
	console.log(cards[cardId].cardImage); //tell user selected card image
	console.log(cards[cardId].suit); //tell user selected card suit
	cardsInPlay.push(cards[cardId].rank); //add selected card rank to array for checking

	checkForMatch(cardId); //function to check cards for match

}

//function to reset board
var resetBoard = function() {
	cardsInPlay = [];

	for (i=0; i<cards.length; i++) {
		var cardElement = document.getElementsByTagName('img')[i];
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('dataid', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementsByTagName('img')[i].innerHTML = cardElement.src;
	}
	
}

//Event listener for resetting game board
document.getElementById('resetButton').addEventListener('click', resetBoard);

//Initialize game board
createBoard();