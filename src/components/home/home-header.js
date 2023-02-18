import React, { useState } from 'react';

import { ReactComponent as LogoSVG } from 'assets/svg/home-safeblock-logo.svg';
import { useAuth } from 'provider/auth-providers';
import { useModalUpdater } from 'provider/portal-provider';

const HomeHeader = () => {
    const {
        is_success,
        isError: is_error,
        is_login,
        user,
        AuthSignUp,
    } = useAuth();
    const [selectedOption, setSelectedOption] = useState();
    const { toggleModal } = useModalUpdater();

    const selectOption = {
        borderBottomColor: '#10D854',
        borderBottomWidth: 2,
        borderRadius: 4,
    };

    const signUp = () => {
        AuthSignUp().then(() => toggleModal.show('signup_modal'));
    };

    return (
        <>
            <div className="sticky top-0 z-10 flex w-[100%] items-center justify-between bg-[transparent] backdrop-blur-[100px]">
                <div className=" flex items-center p-1">
                    <LogoSVG className="m-2" />
                    <p className="inter-font text-[20px] font-bold">
                        SafeBlock
                    </p>
                </div>
                <div className="logo">
                    <ul className="mr-6 flex">
                        <li
                            className="m-2  cursor-pointer font-bold"
                            style={
                                selectedOption === 'services'
                                    ? selectOption
                                    : null
                            }
                            onClick={() => {
                                setSelectedOption('services');
                            }}
                        >
                            <a
                                href="#services"
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Services
                            </a>
                        </li>
                        <li
                            className="m-2  cursor-pointer font-bold"
                            style={
                                selectedOption === 'feature'
                                    ? selectOption
                                    : null
                            }
                            onClick={() => setSelectedOption('feature')}
                        >
                            <a
                                href="#feature"
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Features
                            </a>
                        </li>
                        <li
                            className="m-2  cursor-pointer font-bold"
                            style={
                                selectedOption === 'team' ? selectOption : null
                            }
                            onClick={() => setSelectedOption('team')}
                        >
                            <a
                                href="#team"
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Team
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <ul className="mr-6 flex">
                        {!is_login ? (
                            <>
                                <li className="m-2 cursor-pointer font-bold text-[#10D854]">
                                    Sign In
                                </li>
                                <li
                                    className="m-2 cursor-pointer font-bold text-[#10D854]"
                                    onClick={signUp}
                                >
                                    Sign Up
                                </li>
                            </>
                        ) : (
                            <li className="m-2 cursor-pointer rounded-lg border-[1px] border-[#10D854] p-2 font-bold text-[#10D854]">
                                Dashboard
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;
