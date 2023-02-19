import React from "react";

import Modal from "components/modal/modal";

const AssetTransferVaultModal = (props) => {
	return (
		<>
			<Modal
				className=""
				{...props}
			>
				<div className="flex h-[500px] w-[450px] flex-col rounded-md bg-[#181C1F] p-4">
					<div>one</div>
					<div>teo</div>
				</div>
			</Modal>
		</>
	);
};

export default AssetTransferVaultModal;
