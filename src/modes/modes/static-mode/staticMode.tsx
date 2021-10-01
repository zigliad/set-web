import { useStaticMode } from "bl/modes/single/useStaticMode";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createStaticMode = (totalSets: number, minSets?: number) => {
	const useStaticModeX = () => {
		const { deckGenerator } = useInitGameParts({
			deckGeneratorMinSets: minSets ?? totalSets,
		});
		return useStaticMode(deckGenerator, totalSets);
	};

	return useStaticModeX;
};
