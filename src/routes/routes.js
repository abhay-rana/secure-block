import { Route, Switch } from "wouter";

import VauldScreen from "screen/vauld-screen";
import WalletScreen from "screen/wallet-screen";

const Routes = () => {
	return (
		<Switch>
			<Route
				path="/wallet"
				component={WalletScreen}
			/>
			<Route
				path="/vauld"
				component={VauldScreen}
			/>
		</Switch>
	);
};

export default Routes;
