import React from "react";
import { useLocation } from "wouter";

import { IoMdWallet } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillSafeFill } from "react-icons/bs";

const Sidebar = () => {
	const [location, setLocation] = useLocation();

	return (
		<section
			id="sidebar"
			className="fixed top-0 flex h-screen w-[250px] flex-col gap-1 bg-[#1F1C1C]/[0.41] p-2 text-xl"
		>
			<div
				className={`mt-[80px] flex cursor-pointer flex-row gap-2 ${location === "/wallet" ? "border-white-500 rounded-lg border-l-4 bg-[#0C1013] " : ""} p-2`}
				onClick={() => setLocation("/wallet")}
			>
				<div>
					<IoMdWallet className={`h-[25px] ${location === "/wallet" ? "text-[white]" : "text-[gray]"}`} />
				</div>
				<p
					className={`cursor-pointer text-[18px] font-normal ${location === "/wallet" ? "text-[white]" : "text-[gray]"} `}
					onClick={() => setLocation("/wallet")}
				>
					Wallet
				</p>
			</div>
			<div
				className={`flex flex-row gap-2  p-2 ${location === "/vauld" ? "border-white-500 rounded-lg border-l-4 bg-[#0C1013]" : ""}`}
				onClick={() => setLocation("/vauld")}
			>
				<div className="relative">
					<BsFillSafeFill className={`h-[25px] ${location === "/vauld" ? "text-[white]" : "text-[gray]"}`} />
				</div>
				<p className={`cursor-pointer text-[18px] font-normal ${location === "/vault" ? "text-[white]" : "text-[gray]"} `}>Smart Vault</p>
			</div>
			<div
				className={`flex flex-row gap-2  p-2 ${location === "/settings" ? "border-white-500 rounded-lg border-l-4 bg-[#0C1013]" : ""}`}
				onClick={() => setLocation("/settings")}
			>
				<div className="relative">
					<IoSettingsSharp className={`h-[25px] ${location === "/settings" ? "text-[white]" : "text-[gray]"}`} />
				</div>
				<p
					className={`cursor-pointer text-[18px] font-normal ${location === "/settings" ? "text-[white]" : "text-[gray]"} `}
					onClick={() => setLocation("/settings")}
				>
					Setting
				</p>
			</div>
		</section>
	);
};

export default Sidebar;
