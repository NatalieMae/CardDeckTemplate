function renderDeck(deck)
{
    document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		if (deck.deck[i].suit === "Spades") {
		
		if(deck.deck[i].value === "Ace") card.textContent = "Ace of 🂡";
		if(deck.deck[i].value === 2) card.textContent = "2 of 🂡"
		}
		card.className = "card";
		value.className = "value";
		suit.className = "suit" + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

document.getElementsByClassName("outline").onclick = function() {myFunction()};

// // function myFunction() {
// //     document.getElementsByClassName("outline").innerHTML = "";
// // } This is already partially listed in the above code. hmmm... 
// // function myFunction() {
//     document.getElementById('deck').innerHTML = "Fingers Crossed" ; 
// }
// //I need the above code to return more cards. Or flip over to a discard pile. 