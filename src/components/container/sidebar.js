import React from "react";
import { useLocation } from "wouter";

import { ReactComponent as Wallet } from "assets/svg/wallet-svg.svg";
import { ReactComponent as Vauld } from "assets/svg/secure-vauld.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Lock } from "assets/svg/lock.svg";
import { ReactComponent as Circle } from "assets/svg/circle.svg";

const Sidebar = () => {
	const [location, setLocation] = useLocation();

	return (
		<section
			id="sidebar"
			className="fixed top-0 flex h-screen w-[250px] flex-col gap-4 bg-[#1F1C1C]/[0.41] p-2 text-xl"
		>
			<div className={`mt-[80px] flex flex-row gap-2 ${location === "/wallet" ? "border-white-500 border-l-4" : ""} p-2`}>
				<div>
					<Wallet />
				</div>
				<div onClick={() => setLocation("/wallet")}>Wallet</div>
			</div>
			<div className={`flex flex-row gap-2  p-2 ${location === "/vauld" ? "border-white-500 border-l-4" : ""}`}>
				<div className="relative ">
					<Vauld />
					<Lock className="absolute top-[10px] left-[11px]" />
				</div>
				<div onClick={() => setLocation("/vauld")}>Smart Vauld</div>
			</div>
			<div className={`flex flex-row gap-2  p-2 ${location === "/settings" ? "border-white-500 border-l-4" : ""}`}>
				<div className="relative ">
					<Setting />
					<Circle className="absolute top-[9px] left-[11px]" />
				</div>
				<div onClick={() => setLocation("/settings")}>Setting</div>
			</div>
		</section>
	);
};

export default Sidebar;
