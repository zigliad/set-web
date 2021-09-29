import Brain from "bl/brain/Brain";
import Card from "bl/card/Card";
import Deck from "bl/deck/Deck";
import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { Action } from "types/utils/functions";

export default abstract class Mode {
	deckGenerator: DeckGenerator;
	gameEnded: boolean = true;
	deck: Deck;
	brain: Brain;
	observers: Action[];

	constructor(deckGenerator: DeckGenerator, observers: Action[] = []) {
		this.deckGenerator = deckGenerator;
		this.gameEnded = true;
		this.deck = deckGenerator.generate();
		this.brain = this.deck.brain;
		this.observers = observers;
		console.log(this.deck);
	}

	stateHasChanged() {
		for (const callback of this.observers) {
			callback();
		}
	}

	newGame() {
		this.gameEnded = false;
		this.deck = this.deckGenerator.generate();
	}

	gameHasEnded() {
		this.gameEnded = true;
	}

	checkSet(indexes: number[]) {
		let cards = indexes.map((i) => this.deck.cards[i]);
		if (this.brain.isSet(cards)) {
			this.setFound(indexes, cards);
			return true;
		}

		return false;
	}

	abstract setFound(indexes: number[], cards: Card[]): void;

	abstract rules(): string;

	abstract name(): string;
}
