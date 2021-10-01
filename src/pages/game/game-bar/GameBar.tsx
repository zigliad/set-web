import { IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import React, { DispatchWithoutAction } from "react";

export const GameBar = ({
	title,
	name,
	rules,
	newGame,
}: {
	title: string;
	name: string;
	rules: string;
	newGame: DispatchWithoutAction;
}) => {
	return (
		<Paper className="flex-vcenter justify-between shadow-lg rounded-2xl p-4">
			<div>
				<IconButton>
					<ArrowBackRoundedIcon />
				</IconButton>
				<IconButton onClick={newGame}>
					<ReplayRoundedIcon />
				</IconButton>
			</div>
			<Typography>{title}</Typography>
			<IconButton onClick={() => console.log(rules)}>
				<InfoRoundedIcon />
			</IconButton>
		</Paper>
	);
};
