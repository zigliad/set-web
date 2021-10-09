import Brain from "bl/brain/Brain";
import OddSizeSetValidator from "bl/brain/parts/set-validator/OddSizeSetValidator";
import BasicSetsComparator from "bl/brain/parts/sets-comparators/BasicSetsComparator";
import ExcludeCardsGenerator from "bl/generators/card/ExcludeCardsGenerator";
import BasicRandomCardExcludeGenerator from "bl/generators/card/random-exclude/BasicRandomCardExcludeGenerator";
import BasicRandomCardGenerator from "bl/generators/card/random/BasicRandomCardGenerator";
import OddOptionsManySetsDeckGenerator from "bl/generators/deck/OddOptionsManySetsDeckGenerator";
import { useStaticMode } from "bl/modes/single/useStaticMode";
import { useMemo } from "react";

const ATTRS = 4;
const OPTIONS = 3;

export const createStaticMode = (totalSets: number, minSets?: number) => {
	const useStaticModeX = () => {
		const gameParts = useMemo(() => {
			const validator = new OddSizeSetValidator(ATTRS, OPTIONS);
			const comparator = new BasicSetsComparator();
			const brain = new Brain(ATTRS, OPTIONS, validator, comparator);
			const randomCardGenerator = new BasicRandomCardGenerator();
			const randomCardExcludeGenerator =
				new BasicRandomCardExcludeGenerator(randomCardGenerator);
			const cardsGenerator = new ExcludeCardsGenerator(
				ATTRS,
				OPTIONS,
				randomCardGenerator,
				randomCardExcludeGenerator
			);
			const deckGenerator = new OddOptionsManySetsDeckGenerator(
				12,
				minSets ?? totalSets,
				brain,
				cardsGenerator
			);
			return {
				validator,
				comparator,
				brain,
				deckGenerator,
				randomCardsGenerator: randomCardGenerator,
				cardsGenerator,
			};
		}, []);

		return useStaticMode(gameParts.deckGenerator, totalSets);
	};

	return useStaticModeX;
};
