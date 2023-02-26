import React from 'react';

import Modal from 'components/modal/modal';

import { ReactComponent as CopySVG } from 'assets/svg/copy.svg';
import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg';

import Input from 'components/common/input';
import Button from 'components/common/button';

const AssetTransferVaultModal = (props) => {
    return (
        <>
            <Modal className="" {...props}>
                <div className="flex  w-[450px] flex-col  gap-6 rounded-md bg-[#181C1F] p-4">
                    <div
                        id="vault_header"
                        className="flex flex-col items-center  gap-3"
                    >
                        <div>
                            <img
                                src="/assets/avatar-icon.png"
                                className="h-[50px] w-[50px]"
                            />
                        </div>
                        <h3>Smart Wallet</h3>
                        <div className="flex flex-row gap-2">
                            <span>address</span>
                            <CopySVG className="h-5 w-5 self-center" />
                        </div>
                    </div>
                    <div
                        id="transfer_icons"
                        className="flex flex-row items-center justify-center gap-3 "
                    >
                        <div>
                            <img src="/assets/account.png" />
                        </div>
                        <div>
                            <ArrowRight className="h-10 w-10" />
                        </div>
                        <div>
                            <img src="/assets/account-two.png" />
                        </div>
                    </div>
                    <div id="input_amount">
                        <Input
                            type="number"
                            placeholder="Enter Amount"
                            className="border-none bg-[#171717] p-6 text-white outline-none"
                        />
                    </div>
                    <Button className="h-10 bg-[#05416D] text-white" block>
                        Add To Smart Wallet
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default AssetTransferVaultModal;
