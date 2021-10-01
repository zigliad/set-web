import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { Set } from "bl/types/set";
import { useState } from "react";

export const useSinglePlayerMode = (deckGenerator: DeckGenerator) => {
	const [gameEnded, setGameEnded] = useState(true);
	const [deck, setDeck] = useState(deckGenerator.generate());

	const newGame = () => {
		setGameEnded(false);
		setDeck(deckGenerator.generate());
	};

	const checkSet = (indexes: number[]) => {
		const falsyResult = [false, []] as [boolean, Set];

		if (gameEnded) return falsyResult;

		let cards = indexes.map((i) => deck.cards[i]);
		if (deck.brain.isSet(cards)) {
			return [true, cards] as [boolean, Set];
		}

		return falsyResult;
	};

	return {
		gameEnded,
		setGameEnded,
		deck,
		brain: deck.brain,
		newGame,
		checkSet,
	};
};
