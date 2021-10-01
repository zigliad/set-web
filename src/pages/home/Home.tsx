import { Button } from "@material-ui/core";
import { useIsDarkMode } from "hooks/useIsDarkMode";
import React from "react";
import { useHistory } from "react-router";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Home = () => {
	const history = useHistory();
	const [isDark, toggle] = useIsDarkMode();

	return (
		<div>
			<DarkModeSwitch checked={isDark} onChange={toggle} />
			<Button onClick={() => history.push("game/time10")}>
				Time mode
			</Button>
		</div>
	);
};
