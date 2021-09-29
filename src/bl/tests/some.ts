import Brain from "bl/brain/Brain";
import OddSizeSetValidator from "bl/brain/parts/set-validator/OddSizeSetValidator";
import BasicSetsComparator from "bl/brain/parts/sets-comparators/BasicSetsComparator";
import ExcludeCardsGenerator from "bl/generators/card/ExcludeCardsGenerator";
import BasicRandomCardExcludeGenerator from "bl/generators/card/random-exclude/BasicRandomCardGenerator";
import BasicRandomCardGenerator from "bl/generators/card/random/BasicRandomCardGenerator";
import BasicDeckGenerator from "bl/generators/deck/BasicDeckGenerator";
import TimeMode from "bl/modes/single/TimeMode";
import BasicReplacer from "bl/replacer/BasicReplacer";

const ATTRS = 4;
const OPTIONS = 3;

export const some = () => {
	const validator = new OddSizeSetValidator(ATTRS, OPTIONS);
	const comparator = new BasicSetsComparator();
	const brain = new Brain(ATTRS, OPTIONS, validator, comparator);

	const deckGenerator = new BasicDeckGenerator(4, 1, brain);
	const randomCardsGenerator = new BasicRandomCardGenerator();
	const cardsGenerator = new ExcludeCardsGenerator(
		ATTRS,
		OPTIONS,
		randomCardsGenerator,
		new BasicRandomCardExcludeGenerator(randomCardsGenerator)
	);
	const replacer = new BasicReplacer(cardsGenerator, 1);
	const timeMode = new TimeMode(deckGenerator, replacer, 60);

	timeMode.newGame();
};
