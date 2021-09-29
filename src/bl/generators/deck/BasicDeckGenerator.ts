import Brain from "bl/brain/Brain";
import Deck from "bl/deck/Deck";
import DeckGenerator from "bl/generators/deck/DeckGenerator";

// Creates a deck with some minimum amount of sets in it.
// It is kind of stupid, so it better use it for
// small amount of minimum sets or it might get slow.
export default class BasicDeckGenerator extends DeckGenerator {
	minSets: number;
	brain: Brain;

	constructor(size: number, minSets: number, brain: Brain) {
		super(size);
		this.minSets = minSets;
		this.brain = brain;
	}

	generate() {
		let sets;
		let deck;
		do {
			deck = new Deck(
				this.brain.allCardsShuffled().slice(0, this.size),
				this.brain
			);
			sets = deck.countSets();
		} while (sets < this.minSets);

		return deck;
	}
}
