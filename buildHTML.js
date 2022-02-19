
function renderDeck(myDeck) {
    document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		card.className = "card";
		value.className = "value";
		suit.className = "suit" + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		let card = document.createElement("div");
		if (deck.deck[i].suit === "Spades") {
		
		if(deck.deck[i].value === "Ace") card.textContent = "Ace of 🂡";
		if(deck.deck[i].value === 2) card.textContent = "2 of 🂡"
		}
		myDeck.appendChild(card);
	}
	root.append(myDeck);
}


renderDeck(deck1);

let warDiv = document.createElement("div");
warDiv.id = "warDiv";
root.append(warDiv);

renderDeck(deck2);

