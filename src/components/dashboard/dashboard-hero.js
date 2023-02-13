import React, { useEffect } from "react";
import { ReactComponent as Copy } from "assets/svg/copy.svg";

const DashboardHero = () => {

	useEffect(() => {
		const listner = window.addEventListener('beforeunload', function (event) {
			// event.preventDefault();
			event.returnValue = 'please do not refresh';

			if(event.returnValue == '') {
				this.alert('please do not refresh')
			}
		  });
		  
		return () => {
			window.removeEventListener('beforeunload', listner);
		}
	})
	  

	return (
		<section
			id="dashboard_hero"
			className="flex flex-col gap-3"
		>
			{/* user_image */}
			<div>
				<img src="/assets/cat.png" />
			</div>
			{/* user_name */}
			<div>suryakant.eth</div>
			{/* user_address */}
			<div className="flex flex-row gap-2">
				<div className="text-gray-400">0x4bAe3A....dE816E</div>
				<Copy className="h-5 w-5 self-center" />
			</div>
		</section>
	);
};

export default DashboardHero;
