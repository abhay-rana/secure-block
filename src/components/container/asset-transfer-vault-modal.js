import React from 'react';

import Modal from 'components/modal/modal';

import { ReactComponent as CopySVG } from 'assets/svg/copy.svg';
import { ReactComponent as ArrowRight } from '';
import Button from 'components/common/button';

const AssetTransferVaultModal = (props) => {
    return (
        <>
            <Modal className="" {...props}>
                <div className="flex h-[500px] w-[450px] flex-col items-center gap-3 rounded-md bg-[#181C1F] p-4">
                    <div
                        id="vault_header"
                        className="flex flex-col items-center"
                    >
                        <div>
                            <img
                                src="/assets/avatar-icon.png"
                                className="h-[40px] w-[40px]"
                            />
                        </div>
                        <h3>Smart Wallet</h3>
                        <div className="flex flex-row gap-2">
                            <span>address</span>
                            <CopySVG className="h-5 w-5 self-center" />
                        </div>
                    </div>
                    <div id="transfer_icons" className="flex flex-row gap-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="input_amount"></div>
                    <Button className="bg-[#05416D] text-white" block>
                        Add To Smart Wallet
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default AssetTransferVaultModal;
