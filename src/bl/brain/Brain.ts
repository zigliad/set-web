import SetValidator from "bl/brain/parts/set-validator/SetValidator";
import SetsComparator from "bl/brain/parts/sets-comparators/SetsComparator";
import Card from "bl/card/Card";
import { Set } from "bl/types/set";
import { getKs } from "bl/utils/getKs";
import { shuffle } from "lodash";

export default class Brain {
	attributes: number;
	options: number;
	setSize: number; // options alias
	setValidator: SetValidator;
	setsComparator: SetsComparator;

	constructor(
		attributes: number,
		options: number,
		setValidator: SetValidator,
		setsComparator: SetsComparator
	) {
		this.attributes = attributes;
		this.options = options;
		this.setSize = options;
		this.setValidator = setValidator;
		this.setsComparator = setsComparator;
	}

	isSet(maybeSet: Set) {
		return this.setValidator.validate(maybeSet);
	}

	setsEquals(set1: Set, set2: Set) {
		return this.setsComparator.compare(set1, set2);
	}

	setInSets(set: Set, sets: Set[]) {
		for (const set2 of sets) {
			if (this.setsEquals(set, set2)) {
				return true;
			}
		}
		return false;
	}

	allCardsShuffled() {
		let cards = getKs(
			Array.from(Array(this.options).keys()),
			this.attributes
		).map((card) => new Card(card));
		return shuffle(cards);
	}
}
