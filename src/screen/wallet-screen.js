import React, { useEffect } from "react";

import DashboardHero from "components/dashboard/dashboard-hero";
import AssetsPortfolioTab from "components/dashboard/assets-portfolio-tab";
import AssetsTable from "components/dashboard/assets-table";

const WalletScreen = () => {
	// useEffect(() => {
	// 	const listener = window.addEventListener("beforeunload", (event) => {
	// 		event.returnValue = "please do not refresh";

	// 		if (event.returnValue == "") {
	// 			this.alert("please do not refresh");
	// 		}
	// 	});

	// 	return () => {
	// 		window.removeEventListener("beforeunload", listener);
	// 	};
	// }, []);
	return (
		<section
			id="wallet-screen"
			className="flex flex-col gap-6"
		>
			<DashboardHero />
			<AssetsPortfolioTab />
			<AssetsTable />
		</section>
	);
};

export default WalletScreen;
