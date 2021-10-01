import { Button, Typography } from "@mui/material";
import { useTimeMode } from "bl/modes/single/useTimeMode";
import { GameGrid } from "components/game-grid/GameGrid";
import { useInitGameParts } from "hooks/useInitGameParts";
import { useIsDarkMode } from "hooks/useIsDarkMode";
import React from "react";
import { useMount } from "react-use";

export const Home = () => {
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
	} = useTimeMode(deckGenerator, replacer, 60);

	useMount(newGame);

	const [, toggle] = useIsDarkMode();

	return (
		<div>
			<Button onClick={toggle}>Toggle theme</Button>
			<Typography className="text-red-500">
				{timeLeft} / {seconds}
			</Typography>
			<Typography>Score: {score}</Typography>
			<GameGrid deck={deck} checkSet={checkSet} />
		</div>
	);
};
