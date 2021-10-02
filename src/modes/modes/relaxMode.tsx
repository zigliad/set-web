import { useRelaxMode } from "bl/modes/single/useRelaxMode";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createRelaxMode = (x: number) => {
	const useRelaxModeX = () => {
		const { deckGenerator, replacer } = useInitGameParts({
			deckGeneratorMinSets: x,
			replacerMinSets: x,
		});
		return useRelaxMode(deckGenerator, replacer);
	};

	return useRelaxModeX;
};
