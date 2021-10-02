import { useTimeMode } from "bl/modes/single/useTimeMode";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createTimeMode = (x: number) => {
	const useTimeModeX = () => {
		const { deckGenerator, replacer } = useInitGameParts({});
		return useTimeMode(deckGenerator, replacer, x);
	};

	return useTimeModeX;
};
