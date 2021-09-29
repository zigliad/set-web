import Brain from "bl/brain/Brain";
import Card from "bl/card/Card";
import { getKsCombinations } from "bl/utils/getKsCombinations";

export default class Deck {
	cards: Card[];
	size: number;
	brain: Brain;

	constructor(cards: Card[], brain: Brain) {
		this.cards = cards;
		this.size = cards.length;
		this.brain = brain;
	}

	countSets() {
		return this.getSets().length;
	}

	getSets() {
		return getKsCombinations(this.cards, this.brain.setSize).filter(
			(maybeSet) => this.brain.isSet(maybeSet)
		);
	}
}
