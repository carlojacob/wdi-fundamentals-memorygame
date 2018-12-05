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

//function to check whether two cards are selected and if they match
var checkForMatch = function() {
	
	if (cardsInPlay.length === 2) {  //check whether two cards have been selected
		if (cardsInPlay[0] === cardsInPlay[1]) { //check whether selected cards match
			alert("You've found a match!"); //output to user if cards match
		} else {
			alert("Sorry, try again."); //output to user if cards do not match
		}
	}
}

//function to input card selections and determine if they match
var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId].rank); //tell user selected card rank
	console.log(cards[cardId].cardImage); //tell user selected card image
	console.log(cards[cardId].suit); //tell user selected card suit
	cardsInPlay.push(cards[cardId].rank); //add selected card rank to array for checking

	checkForMatch(); //function to check cards for match

}

flipCard(0);
flipCard(2);