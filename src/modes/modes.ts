import { createStaticMode } from "modes/modes/static-mode/staticMode";
import { createTimeMode } from "modes/modes/time-mode/timeMode";
import { Mode } from "modes/types/types";
import { Supplier } from "types/utils/functions";

export type Modes = "time60" | "time10" | "static2";

export const modes: Record<Modes, Supplier<Mode>> = {
	time60: createTimeMode(60),
	time10: createTimeMode(10),
	static2: createStaticMode(6),
};
