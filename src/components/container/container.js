import React from 'react';
import { useLocation } from 'wouter';

import Header from 'components/container/header';
import Sidebar from 'components/container/sidebar';
import AssetTransferModal from 'components/container/asset-transfer-modal';
import AssetTransferVaultModal from 'components/container/asset-transfer-vault-modal';

const Container = (props) => {
    const [location, setLocation] = useLocation();
    return (
        <section className="relative flex min-h-screen w-full flex-col">
            <Header />
            <div className="flex flex-row">
                {/* if the route is not "Home" page then render the sidebar */}
                {location !== '/' ? (
                    <div className="basis-[250px]">
                        <Sidebar />
                    </div>
                ) : null}
                <div className="relative flex-1 px-6 py-6">
                    {props.children}
                </div>
            </div>
            <AssetTransferModal id="asset_transfer_modal" />
            <AssetTransferVaultModal id="vault_transfer_modal" />
        </section>
    );
};

export default Container;
