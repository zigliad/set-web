import { IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import { useMode } from "modes/context/context";
import React from "react";
import { useHistory } from "react-router";
import { HOME_ROUTE } from "routing/routes";

export const GameBar = () => {
	const { gameEnded, newGame, rules, title, endgameTitle } = useMode();
	const history = useHistory();
	return (
		<Paper className="flex-vcenter justify-between shadow-lg rounded-2xl p-4">
			<div>
				<IconButton onClick={() => history.push(HOME_ROUTE)}>
					<ArrowBackRoundedIcon />
				</IconButton>
				<IconButton onClick={newGame}>
					<ReplayRoundedIcon />
				</IconButton>
			</div>
			<Typography className="select-none">
				{gameEnded ? endgameTitle : title}
			</Typography>
			<IconButton onClick={() => console.log(rules)}>
				<InfoRoundedIcon />
			</IconButton>
		</Paper>
	);
};
