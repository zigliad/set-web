import Deck from "bl/deck/Deck";
import Replacer from "bl/replacer/Replacer";

// Replace a property in the cards again and again until
// there are at least "minSets" sets in the deck.
export default class PropertyReplacer extends Replacer {
	minSets: number;
	propertyIndex: number;

	constructor(minSets: number, propertyIndex: number) {
		super();
		this.minSets = minSets;
		this.propertyIndex = propertyIndex;
	}

	replace(indexes: number[], deck: Deck) {
		indexes.forEach((index) => {
			if (0 <= index && index < deck.cards.length) {
				const card = deck.cards[index];
				const randomValue = Math.floor(Math.random() * 3);
				card.attributes[this.propertyIndex] = randomValue;
			}
		});

		if (deck.countSets() < this.minSets) {
			this.replace(indexes, deck);
		}
	}
}
