import Card from "bl/card/Card";

export default abstract class RandomCardGenerator {
	abstract generate(attributes: number, options: number): Card;
}
