import { createTheme } from "@material-ui/core";
import { useIsDarkMode } from "../hooks/useIsDarkMode";

export const light = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#536dfe",
		},
	},
});

export const dark = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#536dfe",
		},
	},
});

export const darkInLight = createTheme({ ...dark });

export const useThemeWithMode = () => {
	const [isDark] = useIsDarkMode();
	return isDark ? dark : light;
};
