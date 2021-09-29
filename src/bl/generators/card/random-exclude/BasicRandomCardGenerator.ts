import Card from "bl/card/Card";
import RandomCardExcludeGenerator from "bl/generators/card/random-exclude/RandomCardExcludeGenerator";
import RandomCardGenerator from "bl/generators/card/random/RandomCardGenerator";

export default class BasicRandomCardExcludeGenerator extends RandomCardExcludeGenerator {
	randomCardGenerator: RandomCardGenerator;

	constructor(randomCardGenerator: RandomCardGenerator) {
		super();
		this.randomCardGenerator = randomCardGenerator;
	}

	generate(attributes: number, options: number, exclude: Card[]) {
		let result;
		let found;
		do {
			found = true;
			result = this.randomCardGenerator.generate(attributes, options);
			for (const card of exclude) {
				found = found && !card.equals(result);
			}
		} while (!found);

		return result;
	}
}
