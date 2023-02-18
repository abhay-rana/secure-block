import { useLayoutEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';

import { useAuth } from 'provider/auth-providers';

import Home from 'pages/home';
import VaultScreen from 'screen/vault-screen';
import WalletScreen from 'screen/wallet-screen';
import SettingScreen from 'screen/setting-screen';

const Routes = () => {
    const [location, setLocation] = useLocation();
    const { is_login } = useAuth();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        if (is_login !== true) setLocation('/');
    }, [location, is_login]);

    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/wallet" component={WalletScreen} />
            <Route path="/vault" component={VaultScreen} />
            <Route path="/settings" component={SettingScreen} />
        </Switch>
    );
};

export default Routes;
