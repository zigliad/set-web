import { useMediaQuery, useTheme } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export const useIsBreakpoint = (breakpoint: Breakpoint) => {
	const theme = useTheme();
	const match = useMediaQuery(theme.breakpoints.up(breakpoint));
	return match;
};
