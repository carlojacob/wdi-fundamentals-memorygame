//INITIAL VARIABLE DEFINITIONS

//array storing all card options
var cards = [
{
	index: 0,
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	index: 0,
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	index: 0,
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	index: 0,
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

//array to store selected cardsInPlay
var cardsInPlay = [];

//variable to keep track of score
var score = 0;

//variable to store ID of first card selected
var cardId2;

//***************************//

//function to create the game board
var createBoard = function() {
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img'); //create image element and store in cardElement variable
		cardElement.setAttribute('src', "images/back.png"); //set source file for image
		cardElement.setAttribute('data-id', i); //record card number
		cardElement.addEventListener('click', flipCard); //add event listener for card (image) clicked
		document.getElementById('game-board').appendChild(cardElement); //add image data to div with ID game-board
	}
}

//function to check whether two cards are selected and if they match
var checkForMatch = function(cardId) {
	document.getElementsByTagName('img')[cardId].setAttribute('src',cards[cardId].cardImage);//reveal card image
	//I wasn't able to get this to work using "this". My impression is that "this" only works if the function that 
	//is called (flipCard above) is a part of the variable that we want "this" to refer to (cardElement above).
	//Is this correct?

	//Added functionality:
	//	delays output so that cards show before alerts.
	//	resets the game board if all cards have been turned over/matched.
	//	resets the selected cards if they do not match.
	if (cardsInPlay.length != 0 && cardsInPlay.length % 2 === 0) {  //check whether two cards have been selected
		if (cardsInPlay[cardsInPlay.length-2] === cardsInPlay[cardsInPlay.length-1]) { //check whether selected cards match
			setTimeout(function(){alert("You've found a match!");}, 200); //output to user if cards match
			score += 1;	
			if (cardsInPlay.length === cards.length) { //output score and reset board when all cards are turned over
				setTimeout(function(){alert("Your score is " + score + ".");}, 200);
				setTimeout(resetBoard, 250);
			}
		} else {
			setTimeout(function(){alert("Sorry, try again.");}, 200); //output to user if cards do not match
			setTimeout(flipBack, 200, cardId, cardId2); //flip cards back if cards do not match
			cardsInPlay.pop();
			cardsInPlay.pop();
			score += 1;
		}
	} else {
		cardId2 = cardId; //store ID of first card selected for flipBack function
	}
}

var flipBack = function (cardId,cardId2) { //function to flip cards back over if they do not a match
	document.getElementsByTagName('img')[cardId].setAttribute('src',"images/back.png");
	document.getElementsByTagName('img')[cardId2].setAttribute('src',"images/back.png");
}

//function to input card selections and determine if they match
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	// console.log("User flipped " + cards[cardId].rank); //tell user selected card rank
	// console.log(cards[cardId].cardImage); //tell user selected card image filename
	// console.log(cards[cardId].suit); //tell user selected card suit
	cardsInPlay.push(cards[cardId].rank); //add selected card rank to array for checking

	checkForMatch(cardId); //function to check cards for match

}

//function to reset board
var resetBoard = function() {
	
	score = 0; //reset score due to game completion or "reset" button clicked
	cardsInPlay = []; //reset array storing ranks of selected cards
	

	for (i=0; i<cards.length; i++) {
		var cardElement = document.getElementsByTagName('img')[i]; //select image element and store in cardElement variable
		cardElement.setAttribute('src', "images/back.png"); //set source file for image
		cardElement.setAttribute('dataid', i); //record card number
		cardElement.addEventListener('click', flipCard); //add event listener for card (image) clicked
		document.getElementsByTagName('img')[i].innerHTML = cardElement.src; //edit image data in div with ID game-board
	}
	
}

//Event listener for resetting game board
document.getElementById('resetButton').addEventListener('click', resetBoard);

//Initialize game board
createBoard();