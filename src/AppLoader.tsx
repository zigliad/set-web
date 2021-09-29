import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { StylesProvider } from "@mui/styles";
import { some } from "bl/tests/some";
import { BrowserRouter as Router } from "react-router-dom";
import { useMount, useTitle } from "react-use";
import { AppRouter } from "routing/AppRouter";
import { useThemeWithMode } from "themes/theme";

export const AppLoader = () => {
	const theme = useThemeWithMode();
	useTitle("SET");

	useMount(some);

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<AppRouter />
				</Router>
			</ThemeProvider>
		</StylesProvider>
	);
};
