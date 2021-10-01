import Brain from "bl/brain/Brain";
import OddSizeSetValidator from "bl/brain/parts/set-validator/OddSizeSetValidator";
import BasicSetsComparator from "bl/brain/parts/sets-comparators/BasicSetsComparator";
import ExcludeCardsGenerator from "bl/generators/card/ExcludeCardsGenerator";
import BasicRandomCardExcludeGenerator from "bl/generators/card/random-exclude/BasicRandomCardExcludeGenerator";
import BasicRandomCardGenerator from "bl/generators/card/random/BasicRandomCardGenerator";
import BasicDeckGenerator from "bl/generators/deck/BasicDeckGenerator";
import BasicReplacer from "bl/replacer/BasicReplacer";
import { useMemo } from "react";

const ATTRS = 4;
const OPTIONS = 3;

export const useInitGameParts = () => {
	const gameParts = useMemo(() => {
		const validator = new OddSizeSetValidator(ATTRS, OPTIONS);
		const comparator = new BasicSetsComparator();
		const brain = new Brain(ATTRS, OPTIONS, validator, comparator);
		const deckGenerator = new BasicDeckGenerator(12, 4, brain);
		const randomCardsGenerator = new BasicRandomCardGenerator();
		const cardsGenerator = new ExcludeCardsGenerator(
			ATTRS,
			OPTIONS,
			randomCardsGenerator,
			new BasicRandomCardExcludeGenerator(randomCardsGenerator)
		);
		const replacer = new BasicReplacer(cardsGenerator, 4);
		return {
			validator,
			comparator,
			brain,
			deckGenerator,
			randomCardsGenerator,
			cardsGenerator,
			replacer,
		};
	}, []);

	return gameParts;
};
