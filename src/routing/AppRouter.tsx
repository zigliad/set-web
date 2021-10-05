import { Redirect, Route, Switch } from "react-router-dom";
import { HOME_ROUTE, routes } from "routing/routes";

export const AppRouter = () => {
	return (
		<div className="w-full h-screen flex-center overflow-hidden">
			<Switch>
				{routes.map((route) => (
					<Route path={route.path} exact key={route.path}>
						{route.Component}
					</Route>
				))}
				<Route path="*">
					<Redirect to={HOME_ROUTE} />
				</Route>
			</Switch>
		</div>
	);
};
