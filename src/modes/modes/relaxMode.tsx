import { useRelaxMode } from "bl/modes/single/useRelaxMode";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createRelaxMode = (x: number, attributesCount = 4) => {
	const useRelaxModeX = () => {
		const { deckGenerator, replacer } = useInitGameParts({
			deckGeneratorMinSets: x,
			replacerMinSets: x,
			attributesCount,
		});
		return useRelaxMode(deckGenerator, replacer);
	};

	return useRelaxModeX;
};
