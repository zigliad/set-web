import { Game } from "pages/game/Game";
import { Home } from "pages/home/Home";

export const HOME_ROUTE = "/";
export const BASE_GAME_ROUTE = "/game/";

export const routes = [
	{
		path: HOME_ROUTE,
		Component: <Home />,
	},
	{
		path: BASE_GAME_ROUTE + ":mode",
		Component: <Game />,
	},
];
