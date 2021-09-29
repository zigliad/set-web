import Card from "bl/card/Card";
import RandomCardGenerator from "bl/generators/card/random/RandomCardGenerator";

export default class BasicRandomCardGenerator extends RandomCardGenerator {
	generate(attributes: number, options: number) {
		let card = [];
		for (let i = 0; i < attributes; i++) {
			card.push(Math.floor(Math.random() * options));
		}

		return new Card(card);
	}
}
