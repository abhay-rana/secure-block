import { Route, Switch } from "wouter";

import VaultScreen from "screen/vault-screen";
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
				path="/vault"
				component={VaultScreen}
			/>
			<Route
				path="/settings"
				component={SettingScreen}
			/>
		</Switch>
	);
};

export default Routes;
