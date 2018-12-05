//array storing all card options
var cards = ['queen', 'queen', 'king', 'king'];

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

	console.log("User flipped " + cards[cardId]); //tell user selected card
	cardsInPlay.push(cards[cardId]); //add selected card to array for checking

	checkForMatch(); //function to check cards for match

}

flipCard(0);
flipCard(2);