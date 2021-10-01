import { useTimeMode } from "bl/modes/single/useTimeMode";
import { useInitGameParts } from "hooks/useInitGameParts";
import { useIsDarkMode } from "hooks/useIsDarkMode";
import { GameBar } from "pages/game/game-bar/GameBar";
import { GameGrid } from "pages/game/game-grid/GameGrid";
import React from "react";
import { useMount } from "react-use";

export const Game = () => {
	const { deckGenerator, replacer } = useInitGameParts();

	const {
		gameEnded,
		deck,
		brain: b2,
		newGame,
		checkSet,
		score,
		timeLeft,
		seconds,
		rules,
		name,
		title,
	} = useTimeMode(deckGenerator, replacer, 60);

	useMount(newGame);

	const [, toggle] = useIsDarkMode();

	return (
		<div className="space-y-4 p-12">
			<GameBar
				title={title}
				name={name}
				rules={rules}
				newGame={newGame}
			/>
			<GameGrid deck={deck} checkSet={checkSet} />
		</div>
	);
};
