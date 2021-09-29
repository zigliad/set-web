import Card from "bl/card/Card";

export default abstract class RandomCardExcludeGenerator {
	abstract generate(
		attributes: number,
		options: number,
		exclude: Card[]
	): Card;
}
