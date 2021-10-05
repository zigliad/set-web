import { Supplier } from "extra-types/utils/functions";
import { createRaceMode } from "modes/modes/raceMode";
import { createRelaxMode } from "modes/modes/relaxMode";
import { createStaticMode } from "modes/modes/staticMode";
import { createTimeMode } from "modes/modes/timeMode";
import { Mode } from "modes/types/types";

export type Modes = "time60" | "static6" | "race5" | "relax";

export const modes: Record<Modes, Supplier<Mode>> = {
	time60: createTimeMode(60),
	static6: createStaticMode(6, 8),
	race5: createRaceMode(5, 30),
	relax: createRelaxMode(4),
};
