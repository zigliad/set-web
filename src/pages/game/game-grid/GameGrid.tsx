import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useList } from "react-use";

import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import { useMode } from "modes/context/context";
import { PlayingCard } from "pages/game/playing-card/PlayingCard";

export const GameGrid = () => {
	const { deck, checkSet, gameEnded, endgameTitle } = useMode();
	const [picked, { push, removeAt, reset }] = useList<number>([]);

	const cardClicked = (index: number) => {
		const indexOfIndex = picked.indexOf(index);
		if (indexOfIndex > -1) {
			removeAt(indexOfIndex);
		} else {
			const pickedCloned = [...picked, index];
			push(index);
			const isSet = checkSet(pickedCloned);
			if (pickedCloned.length === deck.brain.setSize) {
				setTimeout(reset, 200);
			}

			if (isSet) {
			}
		}
	};

	const isMd = useIsBreakpoint("md");
	const isLg = useIsBreakpoint("lg");

	if (gameEnded) {
		return (
			<div className="full flex-center flex-grow">
				<Typography
					variant="h3"
					className="whitespace-pre-line"
					align="center"
				>
					{endgameTitle}
				</Typography>
			</div>
		);
	}

	return (
		<Grid container spacing={isLg ? 4 : isMd ? 3 : 2} className="flex-grow">
			{deck.cards.map((card, index) => (
				<Grid item xs={3} key={index}>
					<PlayingCard
						onClick={() => cardClicked(index)}
						card={card}
						picked={picked.indexOf(index) > -1}
					/>
				</Grid>
			))}
		</Grid>
	);
};
