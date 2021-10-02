import { useState } from "react";
import { useCounter, useInterval } from "react-use";

import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { useSinglePlayerMode } from "bl/modes/single/useSinglePlayerMode";
import Replacer from "bl/replacer/Replacer";

export const useRaceMode = (
	deckGenerator: DeckGenerator,
	replacer: Replacer,
	goal: number,
	maxTime: number = 60 * 1_000
) => {
	const {
		gameEnded,
		setGameEnded,
		deck,
		brain,
		newGame: baseNewGame,
		checkSet: baseCheckSet,
	} = useSinglePlayerMode(deckGenerator);

	const [time, { inc: incTime, reset: resetTime }] = useCounter(0);
	const [score, { inc: incScore, reset: resetScore }] = useCounter(0);
	const [won, setWon] = useState(false);

	useInterval(
		() => {
			if (time >= maxTime) {
				setGameEnded(true);
			}
			incTime(0.01);
		},
		gameEnded ? null : 10
	);

	const newGame = () => {
		baseNewGame();
		resetTime();
		resetScore();
		setWon(false);
	};

	const checkSet = (indexes: number[]) => {
		const [isSet] = baseCheckSet(indexes);
		if (isSet) {
			if (score + 1 === goal) {
				setGameEnded(true);
				setWon(true);
			}
			incScore();
			replacer.replace(indexes, deck);
		}
	};

	return {
		gameEnded,
		deck,
		brain,
		newGame,
		checkSet,
		rules: `Find ${goal} sets as fast as you can!`,
		title: `${score} / ${goal} sets, ${time.toFixed(1)}`,
		endgameTitle: won
			? `You did it!\n${goal} sets in ${time.toFixed(2)} seconds!`
			: "Better luck next time...",
		name: "Race Mode",
	};
};
