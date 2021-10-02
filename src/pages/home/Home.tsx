import { Fab, Grid, Typography, useTheme } from "@material-ui/core";
import ColorLensRoundedIcon from "@material-ui/icons/ColorLensRounded";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useIsDarkMode } from "hooks/useIsDarkMode";
import { useSetColors } from "hooks/useSetsColors";
import { modesConfig } from "modes/config";
import { ModeCard } from "pages/home/ModeCard";

export const Home = () => {
	const [isDark, toggle] = useIsDarkMode();
	const theme = useTheme();
	const { next } = useSetColors();

	return (
		<div className="full flex-center flex-col p-12 space-y-12">
			<Typography
				variant="h1"
				className="select-none"
				style={{
					textShadow: `4px 4px ${theme.palette.text.secondary}`,
					fontWeight: 900,
				}}
			>
				SET
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{modesConfig.map((conf, index) => (
					<ModeCard modeConfig={conf} index={index} />
				))}
			</Grid>
			<Fab
				className="fixed bottom-6 right-6 z-50"
				style={{ backgroundColor: theme.palette.background.paper }}
			>
				<DarkModeSwitch checked={isDark} onChange={toggle} />
			</Fab>
			<Fab
				onClick={next}
				className="fixed bottom-6 left-6 z-50"
				style={{ backgroundColor: theme.palette.background.paper }}
			>
				<ColorLensRoundedIcon
					fontSize="large"
					style={{ color: theme.palette.text.primary }}
				/>
			</Fab>
		</div>
	);
};
