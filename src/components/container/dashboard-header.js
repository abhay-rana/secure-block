import React from "react";

const DashboardHeader = () => {
	return (
		<section id="dashboard-header">
			<div className="flex h-[80px] w-screen flex-row justify-end  p-4">
				<img
					src="/assets/avatar-icon.png"
					className="h-[40px] w-[40px]"
				/>
			</div>
		</section>
	);
};

export default DashboardHeader;
