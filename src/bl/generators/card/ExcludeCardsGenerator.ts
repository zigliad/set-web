import Card from "bl/card/Card";
import CardsGenerator from "bl/generators/card/CardsGenerator";

// Defines how to generate some cards.
export default class ExcludeCardsGenerator extends CardsGenerator {
	generate(amount: number, cards: Card[]) {
		const result = [];
		const blacklist = cards.slice();
		for (let i = 0; i < amount; i++) {
			const temp = this.randomExclude(blacklist);
			result.push(temp);
			blacklist.push(temp);
		}

		return result;
	}
}
