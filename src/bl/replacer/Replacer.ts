import Deck from "bl/deck/Deck";

// Defines how to replace some cards
// when the user finds a set.
export default abstract class Replacer {
	abstract replace(indexes: number[], deck: Deck): void;
}
