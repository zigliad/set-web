import Deck from "bl/deck/Deck";
import CardsGenerator from "bl/generators/card/CardsGenerator";
import Replacer from "bl/replacer/Replacer";

// Replace the cards again and again until
// there are at least "minSets" sets in the deck.
export default class BasicReplacer extends Replacer {
	cardsGenerator: CardsGenerator;
	minSets: number;

	constructor(cardsGenerator: CardsGenerator, minSets: number) {
		super();
		this.cardsGenerator = cardsGenerator;
		this.minSets = minSets;
	}

	replace(indexes: number[], deck: Deck) {
		let newCards = this.cardsGenerator.generate(
			deck.brain.options,
			deck.cards
		);

		indexes.map((index, i) => deck.cards.splice(index, 1, newCards[i]));

		if (deck.countSets() < this.minSets) {
			this.replace(indexes, deck);
		}
	}
}
