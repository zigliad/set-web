import { Set } from "bl/types/set";

export default abstract class SetsComparator {
	abstract compare(set1: Set, set2: Set): boolean;
}
