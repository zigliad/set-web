import SetsComparator from "bl/brain/parts/sets-comparators/SetsComparator";
import { Set } from "bl/types/set";

export default class BasicSetsComparator extends SetsComparator {
	compare(set1: Set, set2: Set): boolean {
		for (const card of set1) {
			if (!set2.some((card) => card.equals(card))) {
				return false;
			}
		}
		return true;
	}
}
