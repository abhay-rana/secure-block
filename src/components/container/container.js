import React from "react";

import Sidebar from "components/container/sidebar";
import DashboardHeader from "components/container/dashboard-header";
import AssetTransferModal from "components/container/asset-transfer-modal";
import AssetTransferVaultModal from "components/container/asset-transfer-vault-modal";

const Container = (props) => {
	return (
		<section className="relative flex min-h-screen w-screen flex-col">
			<DashboardHeader />
			<div className="flex flex-row">
				<div className="basis-[250px]">
					<Sidebar />
				</div>
				<div className="relative px-6 py-6">{props.children}</div>
			</div>
			<AssetTransferModal />
			<AssetTransferVaultModal />
		</section>
	);
};

export default Container;
