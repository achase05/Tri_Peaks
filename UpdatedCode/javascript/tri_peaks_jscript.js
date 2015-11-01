var cardArray = new Array(52);//Array of custom card objects
var img = new Array(52);//Array of image items that display cards
var deck = new Array(52);//Deck of shuffled cardArray information
var trash = new Array();//Discard pile where the top card is the playable card
var drawDeck= new Array(24);//Deck of cards to be drawn
var playDeck = new Array(28);//Cards laid out in play
var cardBacks = new Array(28);
var winNum = 0;//Increments to 28, when 28 the game is over
var score = 0;//Score
var bonusScore = 20000;//Decrements by 200 every second, result is added to final score
var streak = 0;//Keeps track of score streak
var currTime;
var x = 211;//Increments when placing out trash pile cards

//Creation of all the custom objects that contain testing and dealing values
cardArray[0] = {url: "ace_of_hearts.png", rank: 1, compNum: null, active: 1, flipped: 0};
cardArray[1] = {url: "2_of_hearts.png", rank: 2, compNum: null, active: 1, flipped: 0};
cardArray[2] = {url: "3_of_hearts.png", rank: 3, compNum: null, active: 1, flipped: 0};
cardArray[3] = {url: "4_of_hearts.png", rank: 4, compNum: null, active: 1, flipped: 0};
cardArray[4] = {url: "5_of_hearts.png", rank: 5, compNum: null, active: 1, flipped: 0};
cardArray[5] = {url: "6_of_hearts.png", rank: 6, compNum: null, active: 1, flipped: 0};
cardArray[6] = {url: "7_of_hearts.png", rank: 7, compNum: null, active: 1, flipped: 0};
cardArray[7] = {url: "8_of_hearts.png", rank: 8, compNum: null, active: 1, flipped: 0};
cardArray[8] = {url: "9_of_hearts.png", rank: 9, compNum: null, active: 1, flipped: 0};
cardArray[9] = {url: "10_of_hearts.png", rank: 10, compNum: null, active: 1, flipped: 0};
cardArray[10] = {url: "jack_of_hearts2.png", rank: 11, compNum: null, active: 1, flipped: 0};
cardArray[11] = {url: "queen_of_hearts2.png", rank: 12, compNum: null, active: 1, flipped: 0};
cardArray[12] = {url: "king_of_hearts2.png", rank: 13, compNum: null, active: 1, flipped: 0};
cardArray[13] = {url: "ace_of_clubs.png", rank: 1, compNum: null, active: 1, flipped: 0};
cardArray[14] = {url: "2_of_clubs.png", rank: 2, compNum: null, active: 1, flipped: 0};
cardArray[15] = {url: "3_of_clubs.png", rank: 3, compNum: null, active: 1, flipped: 0};
cardArray[16] = {url: "4_of_clubs.png", rank: 4, compNum: null, active: 1, flipped: 0};
cardArray[17] = {url: "5_of_clubs.png", rank: 5, compNum: null, active: 1, flipped: 0};
cardArray[18] = {url: "6_of_clubs.png", rank: 6, compNum: null, active: 1, flipped: 0};
cardArray[19] = {url: "7_of_clubs.png", rank: 7, compNum: null, active: 1, flipped: 0};
cardArray[20] = {url: "8_of_clubs.png", rank: 8, compNum: null, active: 1, flipped: 0};
cardArray[21] = {url: "9_of_clubs.png", rank: 9, compNum: null, active: 1, flipped: 0};
cardArray[22] = {url: "10_of_clubs.png", rank: 10, compNum: null, active: 1, flipped: 0};
cardArray[23] = {url: "jack_of_clubs2.png", rank: 11, compNum: null, active: 1, flipped: 0};
cardArray[24] = {url: "queen_of_clubs2.png", rank: 12, compNum: null, active: 1, flipped: 0};
cardArray[25] = {url: "king_of_clubs2.png", rank: 13, compNum: null, active: 1, flipped: 0};
cardArray[26] = {url: "ace_of_diamonds.png", rank: 1, compNum: null, active: 1, flipped: 0};
cardArray[27] = {url: "2_of_diamonds.png", rank: 2, compNum: null, active: 1, flipped: 0};
cardArray[28] = {url: "3_of_diamonds.png", rank: 3, compNum: null, active: 1, flipped: 0};
cardArray[29] = {url: "4_of_diamonds.png", rank: 4, compNum: null, active: 1, flipped: 0};
cardArray[30] = {url: "5_of_diamonds.png", rank: 5, compNum: null, active: 1, flipped: 0};
cardArray[31] = {url: "6_of_diamonds.png", rank: 6, compNum: null, active: 1, flipped: 0};
cardArray[32] = {url: "7_of_diamonds.png", rank: 7, compNum: null, active: 1, flipped: 0};
cardArray[33] = {url: "8_of_diamonds.png", rank: 8, compNum: null, active: 1, flipped: 0};
cardArray[34] = {url: "9_of_diamonds.png", rank: 9, compNum: null, active: 1, flipped: 0};
cardArray[35] = {url: "10_of_diamonds.png", rank: 10, compNum: null, active: 1, flipped: 0};
cardArray[36] = {url: "jack_of_diamonds2.png", rank: 11, compNum: null, active: 1, flipped: 0};
cardArray[37] = {url: "queen_of_diamonds2.png", rank: 12, compNum: null, active: 1, flipped: 0};
cardArray[38] = {url: "king_of_diamonds2.png", rank: 13, compNum: null, active: 1, flipped: 0};
cardArray[39] = {url: "ace_of_spades.png", rank: 1, compNum: null, active: 1, flipped: 0};
cardArray[40] = {url: "2_of_spades.png", rank: 2, compNum: null, active: 1, flipped: 0};
cardArray[41] = {url: "3_of_spades.png", rank: 3, compNum: null, active: 1, flipped: 0};
cardArray[42] = {url: "4_of_spades.png", rank: 4, compNum: null, active: 1, flipped: 0};
cardArray[43] = {url: "5_of_spades.png", rank: 5, compNum: null, active: 1, flipped: 0};
cardArray[44] = {url: "6_of_spades.png", rank: 6, compNum: null, active: 1, flipped: 0};
cardArray[45] = {url: "7_of_spades.png", rank: 7, compNum: null, active: 1, flipped: 0};
cardArray[46] = {url: "8_of_spades.png", rank: 8, compNum: null, active: 1, flipped: 0};
cardArray[47] = {url: "9_of_spades.png", rank: 9, compNum: null, active: 1, flipped: 0};
cardArray[48] = {url: "10_of_spades.png", rank: 10, compNum: null, active: 1, flipped: 0};
cardArray[49] = {url: "jack_of_spades2.png", rank: 11, compNum: null, active: 1, flipped: 0};
cardArray[50] = {url: "queen_of_spades2.png", rank: 12, compNum: null, active: 1, flipped: 0};
cardArray[51] = {url: "king_of_spades2.png", rank: 13, compNum: null, active: 1, flipped: 0};

//.......................Deck Creation......................//

//Shuffles deck
function shuffleDeck(arr) {
	var temp;
	var i, k;
	
	for(i = 0; i < arr.length; i++)
	{
		//Math.random() chooses a number between 0 (inclusive) and 1 (exclusive)
		//This ensures that the floor of multiplying Math.random will never be
		//equal to, or greater than the length of the array
		k = Math.floor(Math.random() * arr.length);
		temp = arr[i];
		arr[i] = arr[k];
		arr[k] = temp;
	}
	
	return arr;
}

//Creates the cards to be laid out in the peaks
function makePlayDeck() {
	var i;
	
	for (i = 0; i <= 27; i++) {
		playDeck[i] = document.createElement("img");
		playDeck[i].src = deck[i].url;
		playDeck[i].setAttribute("class", "card");
		//playDeck[i].addEventListener('click', createHandler(i));
	}
	
	assignClickEvent();//Assigns each card a click event for when they are played on
}


function makeCardBacks() {
	var i;
	
	for(i = 0; i <= 27; i++)
	{
		cardBacks[i] = document.createElement("img");
		cardBacks[i].src = "card_back.png";
		cardBacks[i].setAttribute("class", "card");
	}
}

//Creates the deck of cards to be drawn from
function makeDrawDeck() {
	var i;
	var j = 28;
	
	for (i = 0; i <= 27; i++) {
		drawDeck[i] = deck[j];
		j++;
	}
}

//..............Game Functions.............//

//Takes deck of sorted cards, deals cards, and removes the play button
function startplay()
{
	
	gameTimer(); //starts timer
	
	var button = document.getElementById("play_div");
	var i;
	var j;
	var count = 0;
	var x_co;//x-coordinate value
	var y_co;//y-coordinate value
	
	
	//...............Dealing Algorithm...................
	//Each one of the following loops gives each image in the img array
	//a src, sets its attributes equal to that of the .card CSS class,
	//sets and increments its positioning, and the appends the image to
	//the webpage.
	
	
	//Bottom row deal
	x_co = 10;
	y_co = 251;
	comp = 11;
	
	for (i = 0; i <= 9; i++) {
		playDeck[i].style.position = "absolute";
		playDeck[i].style.left = x_co+'px';
		playDeck[i].style.top = y_co+'px';
		
		x_co = x_co+60;
		comp++;
		
		document.getElementById('layout').appendChild(playDeck[i]);
	}
	
	//Second row from bottom
	x_co = 41;
	y_co = 171;
	
	for (i = 10; i <= 18; i++) {
		playDeck[i].style.position = "absolute";
		playDeck[i].style.left = x_co+'px';
		playDeck[i].style.top = y_co+'px';
		
		cardBacks[i].style.position = "absolute";
		cardBacks[i].style.left = x_co+'px';
		cardBacks[i].style.top = y_co+'px';
		
		x_co = x_co+60;
		
		document.getElementById('layout').appendChild(playDeck[i]);
		document.getElementById('layout').appendChild(cardBacks[i]);
	}
	
	//Third row from bottom
	x_co = 71;
	y_co = 91;
	
	for (i = 19; i <= 24; i++) {
		playDeck[i].style.position = "absolute";
		playDeck[i].style.left = x_co+'px';
		playDeck[i].style.top = y_co+'px';
		
		cardBacks[i].style.position = "absolute";
		cardBacks[i].style.left = x_co+'px';
		cardBacks[i].style.top = y_co+'px';
		
		x_co = x_co+60;
		
		document.getElementById('layout').appendChild(playDeck[i]);
		document.getElementById('layout').appendChild(cardBacks[i]);
		
		count++;
		
		//Creates spacing after every 2 cards
		if(count % 2 == 0)
			x_co = x_co + 60;
	}
	
	//Top row
	x_co = 101;
	y_co = 11;
	
	for (i = 25; i <= 27; i++) {
		playDeck[i].style.position = "absolute";
		playDeck[i].style.left = x_co+'px';
		playDeck[i].style.top = y_co+'px';
		
		cardBacks[i].style.position = "absolute";
		cardBacks[i].style.left = x_co+'px';
		cardBacks[i].style.top = y_co+'px';
		
		x_co = x_co+60;
		
		document.getElementById('layout').appendChild(playDeck[i]);
		document.getElementById('layout').appendChild(cardBacks[i]);
		
		count++;
		
		x_co = x_co + 120;
	}
	
	//Removes the play button
	button.parentNode.removeChild(button);
}

//This function deals a new card from the draw deck and places it at the top of the trash
//pile as the next playable card
function dealCard() {
	
	var currCard;//next playable card
	var o;
	
	streak = 0;//Resets play streak to 0 with each drawn card 
	o = deck.pop();
	trash.push(o);//Put next playable card on top of trash pile
	
	currCard = document.createElement("img");
	currCard.src = trash[trash.length-1].url;
	currCard.setAttribute("class", "card");
	currCard.style.position = "absolute";
	currCard.style.top = 380+"px";
	currCard.style.left = 570+"px";
	
	document.getElementById('table').appendChild(currCard);
	
	//Gets rid of deck card back when cards have been exhausted
	if (deck.length == 0)
		document.getElementById('draw').style.display = 'none';
}



//Performs the action of removing the clicked card from play and placing it on top of
//the trash pile as the next playable card.
//The cards in play are indexed starting at 0 and going to 28, equal with the cards from
//the deck array. Using the same index values form the decks, the two can be manipulated
//in unison.
function playCard(val) {
	var nextCard;//Next card for play
	var scoreTrack = document.querySelector('#steve');
	
	document.getElementById('layout').removeChild(playDeck[val]);//Removes the card from play
	flip(val);//pass card to flip function for flipping of next card
	
	trash[trash.length] = deck[val];//Pushes the information of the card in play onto the top of the trash stack
	nextCard = document.createElement("img");//Creates the same image from play
	nextCard.src = trash[trash.length-1].url;
	nextCard.setAttribute("class", "card");
	nextCard.style.position = "absolute";
	nextCard.style.top = 380+"px";
	nextCard.style.left = 570+"px";
	
	document.getElementById('table').appendChild(nextCard);
	
	winNum++;//Increments winNum after successful play
	streak++;//Increments streak
	
	//Increases score by 100 with streak of 1, and then 200 for any consecutive streak
	if(streak == 1)
	{
		score += 100;
	}
	else if(streak > 1)
	{
		score += 200;
	}
	
	scoreCounter.textContent = score;
}

//Compares rank of cards to see if they can played on or not
function isPlayable(deckVal) {

	//When the card is clicked, clickedRank is created from the rank of the chosen card
	//for comparison to the current playable card's rank
	var clickedRank = deck[deckVal].rank;
	
	if(trash[trash.length - 1].rank == clickedRank-1 || trash[trash.length - 1].rank == clickedRank + 1)
	{
		playCard(deckVal);
	}
	else if((clickedRank == 13 && trash[trash.length - 1].rank == 1) || (clickedRank == 1 && trash[trash.length - 1].rank == 13))
	{
		playCard(deckVal);
	}
		
}

function flip(deckVal){
	if(deckVal == 0)
	{
		deck[10].flipped++;
		
		if(deck[10].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[10]);
	}
	else if(deckVal == 1)
	{
		deck[10].flipped++;
		deck[11].flipped++;
		
		if(deck[10].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[10]);
		
		if(deck[11].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[11]);
	}
	else if(deckVal == 2)
	{
		deck[11].flipped++;
		deck[12].flipped++;
		
		if(deck[11].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[11]);
		
		if(deck[12].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[12]);
	}
	else if(deckVal == 3)
	{
		deck[12].flipped++;
		deck[13].flipped++;
		
		if(deck[12].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[12]);
		
		if(deck[13].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[13]);
	}
	else if(deckVal == 4)
	{
		deck[13].flipped++;
		deck[14].flipped++;
		
		if(deck[13].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[13]);
		
		if(deck[14].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[14]);
	}
	else if(deckVal == 5)
	{
		deck[14].flipped++;
		deck[15].flipped++;
		
		if(deck[14].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[14]);
		
		if(deck[15].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[15]);
	}
	else if(deckVal == 6)
	{
		deck[15].flipped++;
		deck[16].flipped++;
		
		if(deck[15].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[15]);
		
		if(deck[16].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[16]);
	}
	else if(deckVal == 7)
	{
		deck[16].flipped++;
		deck[17].flipped++;
		
		if(deck[16].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[16]);
		
		if(deck[17].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[17]);
	}
	else if(deckVal == 8)
	{
		deck[17].flipped++;
		deck[18].flipped++;
		
		if(deck[17].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[17]);
		
		if(deck[18].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[18]);
	}
	else if(deckVal == 9)
	{
		deck[18].flipped++;
		
		if(deck[18].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[18]);
	}
	else if(deckVal == 10)
	{
		deck[19].flipped++;
		
		if(deck[19].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[19]);
	}
	else if(deckVal == 11)
	{
		deck[19].flipped++;
		deck[20].flipped++;
		
		if(deck[19].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[19]);
		
		if(deck[20].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[20]);
	}
	else if(deckVal == 12)
	{
		deck[20].flipped++;
		
		if(deck[20].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[20]);
	}
	else if(deckVal == 13)
	{
		deck[21].flipped++;
		
		if(deck[21].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[21]);
	}
	else if(deckVal == 14)
	{
		deck[21].flipped++;
		deck[22].flipped++;
		
		if(deck[21].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[21]);
		
		if(deck[22].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[22]);
	}
	else if(deckVal == 15)
	{
		deck[22].flipped++;
		
		if(deck[22].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[22]);
	}
	else if(deckVal == 16)
	{
		deck[23].flipped++;
		
		if(deck[23].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[23]);
	}
	else if(deckVal == 17)
	{
		deck[23].flipped++;
		deck[24].flipped++;
		
		if(deck[23].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[23]);
		
		if(deck[24].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[24]);
	}
	else if(deckVal == 18)
	{
		deck[24].flipped++;
		
		if(deck[24].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[24]);
	}
	else if(deckVal == 19)
	{
		deck[25].flipped++;
		
		if(deck[25].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[25]);
	}
	else if(deckVal == 20)
	{
		deck[25].flipped++;
		
		if(deck[25].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[25]);
	}
	else if(deckVal == 21)
	{
		deck[26].flipped++;
		
		if(deck[26].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[26]);
	}
	else if(deckVal == 22)
	{
		deck[26].flipped++;
		
		if(deck[26].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[26]);
	}
	else if(deckVal == 23)
	{
		deck[27].flipped++;
		
		if(deck[27].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[27]);
	}
	else if(deckVal == 24)
	{
		deck[27].flipped++;
		
		if(deck[27].flipped == 2)
			document.getElementById('layout').removeChild(cardBacks[27]);
	}
	
	
	
}

//This function assigns each in-play card a click event so that when it is clicked, an
//action occurs to put it as the next playable card. However, the variable passed in the
//event listener cannot be a changing looped variable, so each card is given its own 
//variable to pass.
function assignClickEvent(){

	/*int i = 0;
	int max = 28;
	
	for(i = 0; i < max; i++)
	{
		int j = i;
		playDeck[i].addEventListener('click', function(){isPlayable(j)}, false);	
	}*/
	
	var i0 = 0;
	playDeck[0].addEventListener('click', function(){isPlayable(i0)}, false);
	
	var i1 = 1;
	playDeck[1].addEventListener('click', function(){isPlayable(i1)}, false);
	
	var i2 = 2;
	playDeck[2].addEventListener('click', function(){isPlayable(i2)}, false);
	
	var i3 = 3;
	playDeck[3].addEventListener('click', function(){isPlayable(i3)}, false);
	
	var i4 = 4;
	playDeck[4].addEventListener('click', function(){isPlayable(i4)}, false);
	
	var i5 = 5;
	playDeck[5].addEventListener('click', function(){isPlayable(i5)}, false);
	
	var i6 = 6;
	playDeck[6].addEventListener('click', function(){isPlayable(i6)}, false);
	
	var i7 = 7;
	playDeck[7].addEventListener('click', function(){isPlayable(i7)}, false);
	
	var i8 = 8;
	playDeck[8].addEventListener('click', function(){isPlayable(i8)}, false);
	
	var i9 = 9;
	playDeck[9].addEventListener('click', function(){isPlayable(i9)}, false);
	
	var i10 = 10;
	playDeck[10].addEventListener('click', function(){isPlayable(i10)}, false);
	
	var i11 = 11;
	playDeck[11].addEventListener('click', function(){isPlayable(i11)}, false);
	
	var i12 = 12;
	playDeck[12].addEventListener('click', function(){isPlayable(i12)}, false);
	
	var i13 = 13;
	playDeck[13].addEventListener('click', function(){isPlayable(i13)}, false);
	
	var i14 = 14;
	playDeck[14].addEventListener('click', function(){isPlayable(i14)}, false);
	
	var i15 = 15;
	playDeck[15].addEventListener('click', function(){isPlayable(i15)}, false);
	
	var i16 = 16;
	playDeck[16].addEventListener('click', function(){isPlayable(i16)}, false);
	
	var i17 = 17;
	playDeck[17].addEventListener('click', function(){isPlayable(i17)}, false);
	
	var i18 = 18;
	playDeck[18].addEventListener('click', function(){isPlayable(i18)}, false);
	
	var i19 = 19;
	playDeck[19].addEventListener('click', function(){isPlayable(i19)}, false);
	
	var i20 = 20;
	playDeck[20].addEventListener('click', function(){isPlayable(i20)}, false);
	
	var i21 = 21;
	playDeck[21].addEventListener('click', function(){isPlayable(i21)}, false);
	
	var i22 = 22;
	playDeck[22].addEventListener('click', function(){isPlayable(i22)}, false);
	
	var i23 = 23;
	playDeck[23].addEventListener('click', function(){isPlayable(i23)}, false);
	
	var i24 = 24;
	playDeck[24].addEventListener('click', function(){isPlayable(i24)}, false);
	
	var i25 = 25;
	playDeck[25].addEventListener('click', function(){isPlayable(i25)}, false);
	
	var i26 = 26;
	playDeck[26].addEventListener('click', function(){isPlayable(i26)}, false);
	
	var i27 = 27;
	playDeck[27].addEventListener('click', function(){isPlayable(i27)}, false);
}



//Displays and operates the game timer
function countdown(timeLeft, show){
	var myTimer = timeLeft, minutes, seconds;
	//var currTime;

	//Time increments every second
	var interval = setInterval(function () {
		minutes = parseInt(myTimer / 60, 10);//Keeps track of minutes
		seconds = parseInt(myTimer % 60, 10);//Keeps track of seconds
		
		if(seconds < 10)
		{
			seconds = "0" + seconds;
		}
		
		currTime = minutes + ":" + seconds;
		show.textContent = currTime;//Replaces time on board with new time
		
		myTimer -= 1;
		
		//If the timer reaches 0, the game is lost, but if all cards are played then
		//it is won. Time incrementation stops
		if(myTimer < 0)
		{
			clearInterval(interval);
			gameLost();
		}
		else if(winNum == 1)
		{
			gameWon();
			clearInterval(interval);
			//gameWon();
		}
		
		bonusScore -= 200; //Decrementing of the bonus score
		if(bonusScore < 0)
			bonusScore = 0;
		
	}, 1000);
}

//............................End Game Elements..............................//

//Create parameters for timer
 function gameTimer (){
	var twoThirty = 150; 
	var showTime = document.querySelector('#time'); 
	countdown(twoThirty, showTime);
}

//Cleans it up a little, making it a function
function scoreTotal()
{
	 return bonusScore + score; 
}

//Displays that the game has been won with scoring information
function gameWon(){
	var addScore = document.getElementById('score');
	var addBonus = document.getElementById('bonus');
	var addTotal = document.getElementById('total');
	
	document.getElementById("game_win").style.zIndex = "100";
	
	addScore.innerHTML = addScore.innerHTML + score;
	addBonus.innerHTML = addBonus.innerHTML + bonusScore;
	addTotal.innerHTML = addTotal.innerHTML + scoreTotal();
	
	document.getElementById("game_win").style.visibility = "visible";
	
	testPHP();
}

//Displays the game has been lost with a "new game" button
function gameLost(){
	document.getElementById("game_lost").style.zIndex = "100";
	document.getElementById("game_lost").style.visibility = "visible";
}

//reloads the page for a new game oportunity
function newGame(){
	location.reload();
}

function testPHP()
{
	var endscore = scoreTotal();
	var time = currTime;
	
	window.open("../php/storeData.php?finScore=" + endscore + "&endTime=" + time, '_blank');
}

deck = shuffleDeck(cardArray); //return a shuffled array
makePlayDeck(); //creates deck of cards for placement on table
makeDrawDeck(); //creates the deck for drawing cards
makeCardBacks();
