import Brain from "bl/brain/Brain";
import Deck from "bl/deck/Deck";
import { Function } from "extra-types/utils/functions";
import { DispatchWithoutAction } from "react";

export type Mode = {
	gameEnded: boolean;
	deck: Deck;
	brain: Brain;
	newGame: DispatchWithoutAction;
	checkSet: Function<number[], boolean>;
	rules: string;
	name: string;
	title: string;
	endgameTitle: string;
};
