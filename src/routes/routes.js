import { useEffect } from 'react'
import { Route, Switch, useLocation } from 'wouter'

import Home from 'pages/home'
import VaultScreen from 'screen/vault-screen'
import WalletScreen from 'screen/wallet-screen'
import SettingScreen from 'screen/setting-screen'

const Routes = () => {
    const [location, setLocation] = useLocation()
    useEffect(() => {
        return () => {}
    }, [])

    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/wallet" component={WalletScreen} />
            <Route path="/vault" component={VaultScreen} />
            <Route path="/settings" component={SettingScreen} />
        </Switch>
    )
}

export default Routes
