import { Game } from "pages/game/Game";
import { Home } from "pages/home/Home";

export const HOME_ROUTE = "/";

export const routes = [
	{
		path: HOME_ROUTE,
		Component: <Home />,
	},
	{
		path: "/game/:mode",
		Component: <Game />,
	},
];
