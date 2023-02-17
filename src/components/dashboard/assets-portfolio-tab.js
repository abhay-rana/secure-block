import React, { useState } from "react";

const AssetsPortfolioTab = () => {
	const [activity_tab, setActivityTab] = useState("Tokens");
	return (
		<section
			id="section_tabs"
			className="flex w-[300px] cursor-pointer flex-row gap-2 text-xl"
		>
			<div
				onClick={() => setActivityTab("Tokens")}
				className={`w-[70px] flex-1 ${activity_tab === "Tokens" ? "border-b-2 border-white" : ""} p-2 text-center`}
			>
				<p>Tokens</p>
			</div>
			<div
				onClick={() => setActivityTab("NFT")}
				className={`flex-1 ${activity_tab === "NFT" ? "border-b-2  border-white " : ""} p-2 text-center`}
			>
				<p>NFT</p>
			</div>
			<div
				onClick={() => setActivityTab("Activity")}
				className={`flex-1  ${activity_tab === "Activity" ? "border-b-2 border-white" : ""}  p-2 text-center`}
			>
				<p>Activity</p>
			</div>
		</section>
	);
};

export default AssetsPortfolioTab;
