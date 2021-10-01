import { Grid } from "@material-ui/core";
import Deck from "bl/deck/Deck";
import { PlayingCard } from "pages/game/playing-card/PlayingCard";
import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import React from "react";
import { useList } from "react-use";
import { Action1 } from "types/utils/functions";

export const GameGrid = ({
	deck,
	checkSet,
}: {
	deck: Deck;
	checkSet: Action1<number[]>;
}) => {
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

	return (
		<Grid container spacing={isMd ? 4 : 2}>
			{deck.cards.map((card, index) => (
				<Grid
					item
					xs={3}
					key={index}
					onClick={() => cardClicked(index)}
					// className="ring-4 ring-red-500 "
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
