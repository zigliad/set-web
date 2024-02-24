import { useMemo } from "react";

import Brain from "bl/brain/Brain";
import OddSizeSetValidator from "bl/brain/parts/set-validator/OddSizeSetValidator";
import BasicSetsComparator from "bl/brain/parts/sets-comparators/BasicSetsComparator";
import ExcludeCardsGenerator from "bl/generators/card/ExcludeCardsGenerator";
import BasicRandomCardExcludeGenerator from "bl/generators/card/random-exclude/BasicRandomCardExcludeGenerator";
import BasicRandomCardGenerator from "bl/generators/card/random/BasicRandomCardGenerator";
import BasicDeckGenerator from "bl/generators/deck/BasicDeckGenerator";
import BasicReplacer from "bl/replacer/BasicReplacer";

export const useInitGameParts = ({
	deckGeneratorMinSets = 4,
	replacerMinSets = 4,
	attributesCount = 4,
	optionsCount = 3,
}: {
	deckGeneratorMinSets?: number;
	replacerMinSets?: number;
	attributesCount?: number;
	optionsCount?: number;
}) => {
	if (optionsCount % 2 === 0) throw new Error("optionsCount must be odd");

	const gameParts = useMemo(() => {
		const validator = new OddSizeSetValidator(
			attributesCount,
			optionsCount
		);
		const comparator = new BasicSetsComparator();
		const brain = new Brain(
			attributesCount,
			optionsCount,
			validator,
			comparator
		);
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
			attributesCount,
			optionsCount,
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
	}, [deckGeneratorMinSets, replacerMinSets, attributesCount, optionsCount]);

	return gameParts;
};
