import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import Container from "react-modal-promise";
import { BrowserRouter as Router } from "react-router-dom";
import { useTitle } from "react-use";
import { AppRouter } from "routing/AppRouter";
import { useThemeWithMode } from "themes/theme";

export const AppLoader = () => {
	const theme = useThemeWithMode();
	useTitle("SET");

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<AppRouter />
				</Router>
				<Container />
			</ThemeProvider>
		</StylesProvider>
	);
};
