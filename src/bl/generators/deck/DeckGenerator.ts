import Deck from "bl/deck/Deck";

// Defines how to generate a fresh new deck.
export default abstract class DeckGenerator {
	size: number;

	constructor(size: number) {
		this.size = size;
	}

	abstract generate(): Deck;
}
