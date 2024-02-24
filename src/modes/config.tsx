import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import EmojiFlagsRoundedIcon from "@material-ui/icons/EmojiFlagsRounded";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { Modes } from "modes/modes";

export type ModeConfig = {
	title: string;
	mode: Modes;
	Icon: OverridableComponent<SvgIconTypeMap>;
};

export const modesConfig: ModeConfig[] = [
	{
		title: "Time",
		mode: "time60",
		Icon: AccessTimeRoundedIcon,
	},
	{
		title: "Time: Harder",
		mode: "time60Attributes5",
		Icon: AccessTimeRoundedIcon,
	},
	{
		title: "Static",
		mode: "static6",
		Icon: SearchRoundedIcon,
	},
	{
		title: "Race",
		mode: "race5",
		Icon: EmojiFlagsRoundedIcon,
	},
	{
		title: "Relax",
		mode: "relax",
		Icon: LocalBarRoundedIcon,
	},
	{
		title: "Relax: Harder",
		mode: "relaxHard",
		Icon: LocalBarRoundedIcon,
	},
];
