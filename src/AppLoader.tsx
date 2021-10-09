import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import "FontsLoader.css";
import { Helmet } from "react-helmet";
import Container from "react-modal-promise";
import { HashRouter } from "react-router-dom";
import { useTitle } from "react-use";
import { AppRouter } from "routing/AppRouter";
import { HOME_ROUTE } from "routing/routes";
import { useThemeWithMode } from "themes/theme";

export const AppLoader = () => {
	const theme = useThemeWithMode();
	useTitle("SET");

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Helmet>
					<meta
						name="theme-color"
						content={theme.palette.background.default}
					/>
				</Helmet>
				<HashRouter basename={HOME_ROUTE}>
					<AppRouter />
				</HashRouter>
				<Container />
			</ThemeProvider>
		</StylesProvider>
	);
};
