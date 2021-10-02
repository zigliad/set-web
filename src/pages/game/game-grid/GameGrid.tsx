import { Grid, Typography } from "@material-ui/core";
import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import { useMode } from "modes/context/context";
import { PlayingCard } from "pages/game/playing-card/PlayingCard";
import React from "react";
import { useList } from "react-use";

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
			checkSet(pickedCloned);
			if (pickedCloned.length === deck.brain.setSize) {
				reset();
			}
		}
	};

	const isMd = useIsBreakpoint("md");

	if (gameEnded) {
		return (
			<div className="full flex-center">
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
		<Grid container spacing={isMd ? 4 : 2}>
			{deck.cards.map((card, index) => (
				<Grid
					item
					xs={3}
					key={index}
					onClick={() => cardClicked(index)}
				>
					<PlayingCard
						card={card}
						picked={picked.indexOf(index) > -1}
					/>
				</Grid>
			))}
		</Grid>
	);
};
