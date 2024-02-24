import { useTimeMode } from "bl/modes/single/useTimeMode";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createTimeMode = (
	x: number,
	seconds: number,
	attributesCount = 4
) => {
	const useTimeModeX = () => {
		const { deckGenerator, replacer } = useInitGameParts({
			deckGeneratorMinSets: x,
			replacerMinSets: x,
			attributesCount,
		});
		return useTimeMode(deckGenerator, replacer, seconds);
	};

	return useTimeModeX;
};
