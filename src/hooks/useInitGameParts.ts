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

export const useInitGameParts = ({
	deckGeneratorMinSets = 4,
	replacerMinSets = 4,
}: {
	deckGeneratorMinSets?: number;
	replacerMinSets?: number;
}) => {
	const gameParts = useMemo(() => {
		const validator = new OddSizeSetValidator(ATTRS, OPTIONS);
		const comparator = new BasicSetsComparator();
		const brain = new Brain(ATTRS, OPTIONS, validator, comparator);
		const deckGenerator = new BasicDeckGenerator(
			12,
			deckGeneratorMinSets,
			brain
		);
		const randomCardGenerator = new BasicRandomCardGenerator();
		const randomExcludeCardGenerator = new BasicRandomCardExcludeGenerator(
			randomCardGenerator
		);
		const cardsGenerator = new ExcludeCardsGenerator(
			ATTRS,
			OPTIONS,
			randomCardGenerator,
			randomExcludeCardGenerator
		);
		const replacer = new BasicReplacer(cardsGenerator, replacerMinSets);
		return {
			validator,
			comparator,
			brain,
			deckGenerator,
			randomCardsGenerator: randomCardGenerator,
			cardsGenerator,
			replacer,
		};
	}, [deckGeneratorMinSets, replacerMinSets]);

	return gameParts;
};
