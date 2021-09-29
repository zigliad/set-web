import Card from "bl/card/Card";
import RandomCardExcludeGenerator from "bl/generators/card/random-exclude/RandomCardExcludeGenerator";
import RandomCardGenerator from "bl/generators/card/random/RandomCardGenerator";

// Defines how to generate some cards.
export default abstract class CardsGenerator {
	attributes: number;
	options: number;
	randomCardGenerator: RandomCardGenerator;
	randomCardExcludeGenerator: RandomCardExcludeGenerator;

	constructor(
		attributes: number,
		options: number,
		randomCardGenerator: RandomCardGenerator,
		randomCardExcludeGenerator: RandomCardExcludeGenerator
	) {
		this.attributes = attributes;
		this.options = options;
		this.randomCardGenerator = randomCardGenerator;
		this.randomCardExcludeGenerator = randomCardExcludeGenerator;
	}

	random() {
		return this.randomCardGenerator.generate(this.attributes, this.options);
	}

	randomExclude(exclude: Card[]) {
		return this.randomCardExcludeGenerator.generate(
			this.attributes,
			this.options,
			exclude
		);
	}

	// Generates "amount" number of cards.
	// Accept "cards" parameter to do some calculations
	// about other cards if needed (e.g. exclude).
	abstract generate(amount: number, cards: Card[]): Card[];
}
