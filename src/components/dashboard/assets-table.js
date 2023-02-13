import React from "react";

import { TbSend } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";

import Button from "components/common/button";

const AssetsTable = () => {
	return (
		<section
			id="assets_table"
			className="w-[650px] rounded-lg bg-[#181C1F] p-2"
		>
			<div class="relative overflow-x-auto shadow-md">
				{[...Array(4)].map(() => (
					<TableRow />
				))}
			</div>
		</section>
	);
};

const TableRow = () => {
	return (
		<>
			<table class="flex w-full text-left text-sm text-gray-500">
				<tbody class="flex-1">
					<tr class="flex flex-row justify-between border-b border-[#FFFFFF]">
						<td className="flex flex-row items-center gap-2 ">
							<div className="">
								<img src="/assets/matic.png" />
							</div>
							<div className="">
								<h2 className="font-bold text-white">MATIC</h2>
								<h4>2.23 MATIC</h4>
							</div>
						</td>

						<td class="flex flex-row justify-end gap-2 px-6 py-4 text-right">
							<Button
								border
								className="border-white font-bold text-white"
							>
								<AiFillDollarCircle className="mr-2 mt-1" /> Add To Vault
							</Button>
							<Button
								border
								className="border-white font-bold text-white"
							>
								<TbSend className="mr-2 mt-1" />
								Send
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default AssetsTable;
