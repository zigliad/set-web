import { Supplier } from "extra-types/utils/functions";
import { createRaceMode } from "modes/modes/raceMode";
import { createRelaxMode } from "modes/modes/relaxMode";
import { createStaticMode } from "modes/modes/staticMode";
import { createTimeMode } from "modes/modes/timeMode";
import { Mode } from "modes/types/types";

export type Modes =
	| "time60"
	| "time60Attributes5"
	| "static6"
	| "race5"
	| "relax"
	| "relaxHard";

export const modes: Record<Modes, Supplier<Mode>> = {
	time60: createTimeMode(4, 60),
	time60Attributes5: createTimeMode(4, 60, 5),
	static6: createStaticMode(6, 8),
	race5: createRaceMode(5, 30),
	relax: createRelaxMode(4),
	relaxHard: createRelaxMode(2, 5),
};
