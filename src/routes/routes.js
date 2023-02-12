import { Route, Switch, useLocation } from "wouter";

const Routes = () => {
	return (
		<switch>
			<Route
				path="/wallet"
				component={WalletScreen}
			/>
			<Route
				path="/vauld"
				component={VauldScreen}
			/>
		</switch>
	);
};

export default Routes;
