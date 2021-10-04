import { Fab, Grid, Typography, useTheme } from "@material-ui/core";
import ColorLensRoundedIcon from "@material-ui/icons/ColorLensRounded";
import { ResponsivePaddingDiv } from "components/ResponsivePaddingDiv";
import { useIsDarkMode } from "hooks/useIsDarkMode";
import { useSetColors } from "hooks/useSetsColors";
import { modesConfig } from "modes/config";
import { ModeCard } from "pages/home/ModeCard";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Home = () => {
	const [isDark, toggle] = useIsDarkMode();
	const theme = useTheme();
	const { next } = useSetColors();

	return (
		<ResponsivePaddingDiv className="full flex-center flex-col space-y-12">
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
				onClick={toggle}
				className="fixed bottom-6 right-6 z-50"
				style={{ backgroundColor: theme.palette.background.paper }}
			>
				<DarkModeSwitch checked={isDark} onChange={() => {}} />
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
		</ResponsivePaddingDiv>
	);
};
