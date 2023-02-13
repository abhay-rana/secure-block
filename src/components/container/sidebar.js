import React from "react";
import { useLocation } from "wouter";

import { ReactComponent as Wallet } from "assets/svg/wallet-svg.svg";
import { ReactComponent as Vauld } from "assets/svg/secure-vauld.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Lock } from "assets/svg/lock.svg";
import { ReactComponent as Circle } from "assets/svg/circle.svg";

import { IoMdWallet } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5'
import { BsFillSafeFill } from 'react-icons/bs';

const Sidebar = () => {
	const [location, setLocation] = useLocation();

	return (
		<section
			id="sidebar"
			className="fixed top-0 flex h-screen w-[250px] flex-col gap-1 bg-[#1F1C1C]/[0.41] p-2 text-xl"
		>
			<div className={`mt-[80px] flex flex-row gap-2 cursor-pointer ${location === "/wallet" ? "border-white-500 border-l-4 bg-[#0C1013] rounded-lg " : ""} p-2`}
				onClick={() => setLocation("/wallet")}>
				<div>
					<IoMdWallet className={`h-[25px] ${location === "/wallet" ? "text-[white]" : "text-[gray]"}`} />
					{/* <Wallet className={`h-[25px] text-[red] ${location === "/wallet" ? "text-[white]" : "text-[gray]"}`}/> */}
				</div>
				<p className={`text-[18px] font-normal cursor-pointer ${location === "/wallet" ? "text-[white]" : "text-[gray]"} `} onClick={() => setLocation("/wallet")}>Wallet</p>
			</div>
			<div className={`flex flex-row gap-2  p-2 ${location === "/vauld" ? "border-white-500 border-l-4 bg-[#0C1013] rounded-lg" : ""}`}
				onClick={() => setLocation("/vauld")}
			>
				<div className="relative ">
					<BsFillSafeFill className={`h-[25px] ${location === "/vauld" ? "text-[white]" : "text-[gray]"}`} />
					{/* <Vauld className="h-[25px]"/>
					<Lock className="absolute top-[10px] left-[11px]" /> */}
				</div>
				<p className={`text-[18px] font-normal cursor-pointer ${location === "/vauld" ? "text-[white]" : "text-[gray]"} `}>Smart Vauld</p>
			</div>
			<div className={`flex flex-row gap-2  p-2 ${location === "/settings" ? "border-white-500 border-l-4 bg-[#0C1013] rounded-lg" : ""}`}
				onClick={() => setLocation("/settings")}
			>
				<div className="relative ">
					<IoSettingsSharp className={`h-[25px] ${location === "/settings" ? "text-[white]" : "text-[gray]"}`} />
					{/* <Setting className="h-[25px]"/>
					<Circle className="absolute top-[9px] left-[11px]" /> */}
				</div>
				<p className={`text-[18px] font-normal cursor-pointer ${location === "/settings" ? "text-[white]" : "text-[gray]"} `} onClick={() => setLocation("/settings")}>Setting</p>
			</div>
		</section>
	);
};

export default Sidebar;
