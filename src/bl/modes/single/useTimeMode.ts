import DeckGenerator from "bl/generators/deck/DeckGenerator";
import { useSinglePlayerMode } from "bl/modes/single/useSinglePlayerMode";
import Replacer from "bl/replacer/Replacer";
import { useCounter, useInterval } from "react-use";

export const useTimeMode = (
	deckGenerator: DeckGenerator,
	replacer: Replacer,
	seconds: number
) => {
	const {
		gameEnded,
		setGameEnded,
		deck,
		brain,
		newGame: baseNewGame,
		checkSet: baseCheckSet,
	} = useSinglePlayerMode(deckGenerator);

	const [timeLeft, { dec: decTime, reset: resetTime }] = useCounter(seconds);
	const [score, { inc: incScore, reset: resetScore }] = useCounter(0);

	useInterval(
		() => {
			if (timeLeft === 1) {
				setGameEnded(true);
			}
			decTime();
		},
		gameEnded ? null : 1_000
	);

	const newGame = () => {
		baseNewGame();
		resetTime();
		resetScore();
	};

	const checkSet = (indexes: number[]) => {
		const [isSet] = baseCheckSet(indexes);
		if (isSet) {
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
		rules: `Find as many sets as you can in ${seconds} seconds!`,
		title: `Score: ${score} - ${timeLeft} seconds left`,
		endgameTitle: `Time's up!\nYour score is ${score}`,
		name: "Time Mode",
	};
};
