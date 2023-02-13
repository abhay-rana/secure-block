import React from "react";

import DashboardHero from "components/dashboard/dashboard-hero";
import Home from "pages/home";

const WalletScreen = () => {
	return (
		<section
			id="wallet-screen"
			className="flex flex-col"
		>
			<div>
				<DashboardHero />
			</div>
		</section>
	);
};

export default WalletScreen;
