import { useDiscoMode } from "bl/modes/single/useDiscoMode";
import PropertyReplacer from "bl/replacer/PropertyReplacer";
import { useInitGameParts } from "hooks/useInitGameParts";

export const createDiscoMode = (
	x: number,
	seconds: number,
	discoIntervalSeconds: number = 6,
	attributesCount = 4
) => {
	const useDiscoModeX = () => {
		const { deckGenerator, replacer } = useInitGameParts({
			deckGeneratorMinSets: x,
			replacerMinSets: x,
			attributesCount,
		});
		return useDiscoMode(
			deckGenerator,
			replacer,
			seconds,
			new PropertyReplacer(x, 3),
			discoIntervalSeconds
		);
	};

	return useDiscoModeX;
};
