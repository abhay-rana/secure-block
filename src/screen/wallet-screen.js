import React, { useEffect, useState } from 'react';

import DashboardHero from 'components/dashboard/dashboard-hero';
import AssetsPortfolioTab from 'components/dashboard/assets-portfolio-tab';
import AssetsTable from 'components/dashboard/assets-table';
import AssetNFTTable from 'components/dashboard/assets-nft-table';

const WalletScreen = () => {
    const [asset_tab, setAssetTab] = useState('Tokens');
    useEffect(() => {
        console.log('wallet screen is rendered');
        return () => {};
    }, []);

    return (
        <section id="wallet-screen" className="flex flex-col">
            <div>
                <DashboardHero />
                <AssetsPortfolioTab {...{ setAssetTab, asset_tab }} />
                {asset_tab === 'Tokens' ? <AssetsTable /> : null}
                {asset_tab === 'NFT' ? <AssetNFTTable /> : null}
            </div>
        </section>
    );
};

export default WalletScreen;
