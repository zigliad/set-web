import { Grid, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

import { ElevatedPaper } from "components/paper/ElevatedPaper";
import { useSetColors } from "hooks/useSetsColors";
import { ModeConfig } from "modes/config";
import { BASE_GAME_ROUTE } from "routing/routes";

export const ModeCard = ({
	modeConfig,
	index,
}: {
	modeConfig: ModeConfig;
	index: number;
}) => {
	const history = useHistory();
	const theme = useTheme();
	const Icon = modeConfig.Icon;

	const { colors } = useSetColors();

	return (
		<Grid item xs={5} md={3} lg={2}>
			<ElevatedPaper
				key={index}
				clickable
				className="group h-full flex-center flex-col space-y-4"
				onClick={() => history.push(BASE_GAME_ROUTE + modeConfig.mode)}
			>
				<div
					className="rounded-full p-6 transform transition group-hover:rotate-12 "
					style={{
						backgroundColor: theme.palette.background.default,
						borderWidth: 4,
						borderColor: colors[index % colors.length],
					}}
				>
					<Icon
						fontSize="large"
						className="transform transition group-hover:scale-110"
					/>
				</div>
				<Typography
					variant="h6"
					className="select-none"
					align="center"
					style={{ fontWeight: 700 }}
				>
					{modeConfig.title}
				</Typography>
			</ElevatedPaper>
		</Grid>
	);
};
