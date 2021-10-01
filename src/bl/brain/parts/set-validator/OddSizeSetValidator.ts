import SetValidator from "bl/brain/parts/set-validator/SetValidator";
import { Set } from "bl/types/set";

export default class OddSizeSetValidator extends SetValidator {
	attributes: number;
	options: number;

	constructor(attributes: number, options: number) {
		super();

		if (options % 2 === 0) {
			throw Error("Options (set size) must be odd");
		}

		this.attributes = attributes;
		this.options = options;
	}

	validate(maybeSet: Set): boolean {
		let sumVector = new Array(this.attributes).fill(0);
		for (const card of maybeSet) {
			card.attributes.map((attribute, index) => {
				sumVector[index] += attribute;
			});
		}

		return sumVector.every((x) => x % this.options === 0);
	}
}
