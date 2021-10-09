import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { useSinglePlayerMode } from "bl/modes/single/useSinglePlayerMode";
import Replacer from "bl/replacer/Replacer";
import { useState } from "react";
import { useCounter, useInterval } from "react-use";

export const useRaceMode = (
	deckGenerator: DeckGenerator,
	replacer: Replacer,
	goal: number,
	maxTime: number = 30
) => {
	const {
		gameEnded,
		setGameEnded,
		deck,
		brain,
		newGame: baseNewGame,
		checkSet: baseCheckSet,
	} = useSinglePlayerMode(deckGenerator);

	const [time, { dec: decTime, reset: resetTime, set: setTime }] =
		useCounter(maxTime);
	const [score, { inc: incScore, reset: resetScore }] = useCounter(0);
	const [won, setWon] = useState(false);

	useInterval(
		() => {
			if (time <= 0) {
				setTime(0);
				setGameEnded(true);
			}
			decTime(0.01);
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

		return isSet;
	};

	return {
		gameEnded,
		deck,
		brain,
		newGame,
		checkSet,
		rules: `Find ${goal} sets before the clock strikes zero!`,
		title: `${score} / ${goal} sets, ${time.toFixed(1)}`,
		endgameTitle: won
			? `You did it!\n${goal} sets in ${(maxTime - time).toFixed(
					2
			  )} seconds!`
			: "Better luck next time...",
		name: "Race Mode",
	};
};
