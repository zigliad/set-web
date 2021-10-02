import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { useSinglePlayerMode } from "bl/modes/single/useSinglePlayerMode";
import Replacer from "bl/replacer/Replacer";
import { useState } from "react";

export const useRelaxMode = (
	deckGenerator: DeckGenerator,
	replacer: Replacer
) => {
	const {
		gameEnded,
		deck,
		brain,
		newGame: baseNewGame,
		checkSet: baseCheckSet,
	} = useSinglePlayerMode(deckGenerator);

	const [availableSets, setAvailableSets] = useState(deck.countSets());

	const newGame = () => {
		baseNewGame();
		setAvailableSets(deck.countSets());
	};

	const checkSet = (indexes: number[]) => {
		const [isSet] = baseCheckSet(indexes);
		if (isSet) {
			replacer.replace(indexes, deck);
			setAvailableSets(deck.countSets());
		}
	};

	return {
		gameEnded,
		deck,
		brain,
		newGame,
		checkSet,
		rules: `There is no time nor score. Just find sets and relax.`,
		title: `${availableSets} sets available`,
		endgameTitle: `Wait, What?`,
		name: "Relax Mode",
	};
};
