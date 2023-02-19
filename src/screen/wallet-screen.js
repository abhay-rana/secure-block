import React, { useEffect } from 'react';

import DashboardHero from 'components/dashboard/dashboard-hero';

const WalletScreen = () => {
    useEffect(() => {
        console.log('wallet screen is rendered');
        return () => {};
    }, []);

    return (
        <section id="wallet-screen" className="flex flex-col">
            <div>
                <DashboardHero />
            </div>
        </section>
    );
};

export default WalletScreen;
