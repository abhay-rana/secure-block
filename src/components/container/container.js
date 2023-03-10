import React from "react";

import Sidebar from "components/container/sidebar";
import DashboardHeader from "components/container/dashboard-header";

const Container = (props) => {
	return (
		<>
			<DashboardHeader />
			<div>{props.children}</div>
			<Sidebar />
		</>
	);
};

export default Container;
