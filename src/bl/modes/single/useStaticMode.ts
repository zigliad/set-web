import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { useSinglePlayerMode } from "bl/modes/single/useSinglePlayerMode";
import { useSet } from "react-use";

export const useStaticMode = (
	deckGenerator: DeckGenerator,
	totalSets: number
) => {
	const {
		gameEnded,
		setGameEnded,
		deck,
		brain,
		newGame: baseNewGame,
		checkSet: baseCheckSet,
	} = useSinglePlayerMode(deckGenerator);

	const [sets, { add, has, reset }] = useSet(new Set<string>([]));

	const newGame = () => {
		baseNewGame();
		reset();
	};

	const checkSet = (indexes: number[]) => {
		const [isSet, cards] = baseCheckSet(indexes);
		if (isSet) {
			const setString = cards
				.sort((a, b) => a.toString().localeCompare(b.toString()))
				.toString();
			if (!has(setString)) {
				if (sets.size + 1 === totalSets) {
					setGameEnded(true);
				}

				add(setString);
			}
		}
	};

	return {
		gameEnded,
		deck,
		brain,
		newGame,
		checkSet,
		rules: `There are many sets here. Your job is to find ${totalSets} of them.`,
		title: `${sets.size} / ${totalSets} sets found`,
		endgameTitle: `You did it! You are the best!`,
		name: "Static Mode",
	};
};
