import Card from "bl/card/Card";
import DeckGenerator from "bl/generators/deck/DeckGenerator";
import Mode from "bl/modes/single/SinglePlayerMode";
import Replacer from "bl/replacer/Replacer";
import { Indefinable } from "types/utils/extra";
import { Action } from "types/utils/functions";

export default class TimeMode extends Mode {
	replacer: Replacer;
	seconds: number;
	interval: Indefinable<NodeJS.Timer> = undefined;
	score: number = 0;
	timeLeft: number;

	constructor(
		deckGenerator: DeckGenerator,
		replacer: Replacer,
		seconds: number,
		observers: Action[] = []
	) {
		super(deckGenerator, observers);
		this.replacer = replacer;
		this.seconds = seconds;
		this.timeLeft = seconds;
	}

	newGame() {
		this.score = 0;
		this.timeLeft = this.seconds;

		if (this.interval !== undefined) {
			clearInterval(this.interval);
		}

		this.interval = setInterval(() => {
			this.timeLeft -= 1;
			if (this.timeLeft === 0 && this.interval !== undefined) {
				clearInterval(this.interval);
				this.gameHasEnded();
			} else {
				this.stateHasChanged();
			}
		}, 1_000);

		super.newGame();
	}

	setFound(indexes: number[], cards: Card[]) {
		this.score += 1;
		this.stateHasChanged();
		this.replacer.replace(indexes, this.deck);
	}

	rules() {
		return `Find as many sets as you can in ${this.seconds} seconds!`;
	}

	name() {
		return "Time Mode";
	}
}
