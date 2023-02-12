import { Route, Switch } from "wouter";

import VauldScreen from "screen/vauld-screen";
import WalletScreen from "screen/wallet-screen";
import SettingScreen from "screen/setting-screen";

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
			<Route
				path="/settings"
				component={SettingScreen}
			/>
		</Switch>
	);
};

export default Routes;
