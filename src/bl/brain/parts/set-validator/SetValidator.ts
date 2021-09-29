import { Set } from "bl/types/set";

export default abstract class SetValidator {
	abstract validate(maybeSet: Set): boolean;
}
