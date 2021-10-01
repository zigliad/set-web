import Brain from "bl/brain/Brain";
import Deck from "bl/deck/Deck";
import { DispatchWithoutAction } from "react";
import { Action1 } from "types/utils/functions";

export type Mode = {
	gameEnded: boolean;
	deck: Deck;
	brain: Brain;
	newGame: DispatchWithoutAction;
	checkSet: Action1<number[]>;
	rules: string;
	name: string;
	title: string;
	endgameTitle: string;
};
