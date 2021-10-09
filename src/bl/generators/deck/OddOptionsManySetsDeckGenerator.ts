import Brain from "bl/brain/Brain";
import Card from "bl/card/Card";
import Deck from "bl/deck/Deck";
import CardsGenerator from "bl/generators/card/CardsGenerator";
import DeckGenerator from "bl/generators/deck/DeckGenerator";

export default class OddOptionsManySetsDeckGenerator extends DeckGenerator {
	minSets: number;
	brain: Brain;
	cardGenerator: CardsGenerator;

	constructor(
		size: number,
		minSets: number,
		brain: Brain,
		cardGenerator: CardsGenerator
	) {
		super(size);
		this.minSets = minSets;
		this.brain = brain;
		this.cardGenerator = cardGenerator;
	}

	generateRandomSet(exclude: Card[]): Card[] {
		const cards = this.cardGenerator.generate(
			this.brain.setSize - 1,
			exclude
		);
		const otherCardAttributes = Array(this.brain.attributes).fill(
			this.brain.options
		);
		for (const card of cards) {
			for (let i = 0; i < card.attributes.length; i++) {
				otherCardAttributes[i] -= card.attributes[i];
			}
		}
		for (let i = 0; i < otherCardAttributes.length; i++) {
			otherCardAttributes[i] +=
				this.brain.options * this.brain.attributes;
			otherCardAttributes[i] %= this.brain.options;
		}
		const otherCard = new Card(otherCardAttributes);

		// check that other card is not in exclude
		for (const card of exclude) {
			if (otherCard.toString() === card.toString()) {
				return this.generateRandomSet(exclude);
			}
		}

		return [...cards, otherCard];
	}

	generate() {
		let sets;
		let deck;
		let exclude: Card[] = [];
		do {
			exclude = [];
			for (let i = 0; i < this.size / this.brain.setSize; i++) {
				const newSet = this.generateRandomSet(exclude);
				exclude = [...exclude, ...newSet];
			}
			deck = new Deck(exclude, this.brain);
			sets = deck.countSets();
		} while (sets < this.minSets);

		return deck;
	}
}
