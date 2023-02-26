import Modal from 'components/modal/modal';
import React from 'react';

import { ReactComponent as CopySVG } from 'assets/svg/copy.svg';
import Button from 'components/common/button';
import Input from 'components/common/input';

const AssetTransferModal = (props) => {
    return (
        <Modal {...props}>
            <div className="flex w-[500px]  flex-col gap-6 rounded-md bg-[#181C1F] p-4">
                <div className="flex flex-col items-center gap-1" id="header">
                    <div className="flex flex-row">
                        <img
                            src="/assets/account.png"
                            className="relative z-10"
                        />
                        <img
                            src="/assets/account-two.png"
                            className="relative -left-4 z-0"
                        />
                    </div>
                    <h3>Transfer USDT</h3>
                    <div className="flex flex-row items-center gap-2">
                        <span>address</span>
                        <CopySVG className="h-4 w-4" />
                    </div>
                </div>
                <div className="flex flex-col gap-2" id="input">
                    <Input
                        type="text"
                        placeholder="Enter Address"
                        className="border-none bg-[#171717] p-6 text-white outline-none"
                    />
                    <Input
                        type="text"
                        placeholder="Enter Amount"
                        className="border-none bg-[#171717] p-6 text-white outline-none"
                    />
                </div>
                <div>
                    <Button className="h-10 bg-[#05416D] text-white" block>
                        Add To Smart Wallet
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AssetTransferModal;
