/** @format */

function renderDeck(myDeck) {
	document.getElementById("deck").innerHTML = "";
	
	for (let i = this.deck.length - 1; i > 0; i--) {
		let card = document.createElement("div");

		// card.textContent = "🂡";
		// card.className = "card";
		// value.className = "value";
		// suit.className = "suit" + deck[i].suit;
			
	if (deck.deck[i].suit === "Hearts") {
		card.textContent  = "♥";
	} else if (deck.deck[i].suit === "Clubs") {
		card.textContent = "♣";
	} else if (deck.deck[i].suit === "Spades") {
		card.textContent = "♠";
	} else if (deck.deck[i].suit === "Diamonds") {
		card.textContent = "♥";
	}
		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);	

	if (deck.deck[i].suit === "Spades") {
	  if (deck.deck[i].value === "Ace") card.textContent = "Ace of 🂡";
	  if (deck.deck[i].value === 2) card.textContent = "2 of 🂡";
		}



		else if (deck.deck[i].suits === 'Diamonds') {
	  if (deck.deck[i].value === "Ace") card.textContent = "Ace of ";
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


