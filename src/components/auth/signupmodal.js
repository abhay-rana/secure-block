import { useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { BsCheckAll } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { useConnect } from 'wagmi';
import { getAccount } from '@wagmi/core';
import { polygonMumbai } from 'wagmi/chains';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';

import { ReactComponent as LogoSVG } from 'assets/svg/home-safeblock-logo.svg';

import Modal from 'components/modal/modal';

const connector = new MetaMaskConnector({
    chains: [polygonMumbai],
    options: {
        shimDisconnect: true,
        shimChainChangedDisconnect: false,
    },
});

const SignUpModal = ({ user, ...props }) => {
    const { address } = getAccount();
    const { connect, isLoading, isSuccess, error } = useConnect();
    const [isNumberValid, setNumberValid] = useState(false);

    const handlePhoneNo = (e) => {
        const text = e.target.value;
        if (text.length > 9) {
            const valid = isValid_Mobile_Number(text);
            setNumberValid(valid);
            console.log(valid, text);
        }
    };

    function isValid_Mobile_Number(mobile_number) {
        let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);

        if (mobile_number == null) {
            return 'false';
        }

        if (regex.test(mobile_number) == true) {
            return 'true';
        } else {
            return 'false';
        }
    }

    return (
        <Modal {...props}>
            <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-[black]">
                <div className="flex w-[440px] items-center justify-center rounded-[34px] bg-[#181C1F]">
                    <div className="m-3 w-[80%] p-2">
                        {user?.logo !== '' ? (
                            <div className="mt-2 mb-2 flex items-center justify-center">
                                <img
                                    className="h-[100px] w-[100px] rounded-full bg-[#0C1013]"
                                    src={user?.photoURL}
                                    alt="logo"
                                />
                            </div>
                        ) : (
                            <div className="mt-2 mb-2 flex  items-center justify-center">
                                <LogoSVG className="h-[100px] w-[100px] rounded-[40px] bg-[#0C1013] p-5" />
                            </div>
                        )}
                        <div className="flex items-center justify-center">
                            <p className="m-2 cursor-pointer text-center text-[20px] font-bold">
                                {user?.displayName || 'Surya Kant Sharma'}
                            </p>
                            {user?.emailVerified ? (
                                <MdVerified className="text-[#10D854]" />
                            ) : null}
                        </div>
                        <p className="m-1 cursor-pointer text-center text-[20px] font-normal">
                            {user?.email}
                        </p>

                        <div className="mt-2 flex w-[100%] items-center rounded-lg bg-[#0C1013] p-0 text-[18px] font-normal">
                            {isNumberValid ? (
                                <BsCheckAll className="ml-2 h-[28px] w-[28px] text-[#10D854]" />
                            ) : null}
                            <input
                                type="text"
                                className=" mt-0 w-[100%] rounded-lg bg-[#0C1013] p-3 text-[18px] font-normal text-[white]"
                                style={{ border: 'none', outline: 'none' }}
                                placeholder="Enter Phone No"
                                required
                                onChange={handlePhoneNo}
                            />
                        </div>

                        {isLoading ? (
                            <div className="mt-6 flex items-center justify-center">
                                <TfiReload className="text-[25px] font-bold text-[#10D854]" />
                                <p className="m-1 ml-2 cursor-pointer text-start text-[20px] font-normal">
                                    {' '}
                                    Connecting...
                                </p>
                            </div>
                        ) : null}

                        {isSuccess ? (
                            <div className="mt-6 flex w-full items-center justify-start overflow-auto rounded-lg bg-[#0C1013] p-1">
                                <BsCheckAll className="ml-1 h-[25px] w-[25px] text-[#10D854]" />
                                <p className="m-1 ml-4 cursor-pointer text-center text-[18px] font-normal">
                                    {address.substring(0, 10) +
                                        '...' +
                                        address.substring(
                                            address.length - 10,
                                            address.length
                                        )}
                                </p>
                            </div>
                        ) : (
                            <>
                                {!isLoading ? (
                                    <div>
                                        <button
                                            className="mt-5 w-full rounded-md border-[2px] border-[#10D854] p-2 text-[20px] font-bold text-[#10D854]"
                                            onClick={() =>
                                                connect({ connector })
                                            }
                                        >
                                            Connect Wallet
                                        </button>
                                    </div>
                                ) : null}
                            </>
                        )}

                        <div>
                            <button
                                className={`mt-5 w-full rounded-md bg-[#10D854] p-2 text-[20px] font-bold`}
                                style={{
                                    backgroundColor:
                                        isNumberValid && isSuccess
                                            ? '#10D854'
                                            : 'gray',
                                    opacity:
                                        isNumberValid && isSuccess ? 1 : 0.4,
                                }}
                                disabled
                            >
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpModal;
