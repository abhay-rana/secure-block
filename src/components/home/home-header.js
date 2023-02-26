import React, { useState } from 'react';
import { useLocation } from 'wouter';

import { useAuth } from 'provider/auth-providers';
import { useModalUpdater } from 'provider/portal-provider';

import { ReactComponent as LogoSVG } from 'assets/svg/home-safeblock-logo.svg';

const selected_option_style = {
    borderRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#10D854',
};

const HomeHeader = () => {
    const { isError: is_error, is_login, AuthSignUp } = useAuth();
    console.log(is_login);
    const [selectedOption, setSelectedOption] = useState();
    const { toggleModal } = useModalUpdater();
    const [location, setLocation] = useLocation();

    const signUp = () => {
        AuthSignUp().then(() => toggleModal.show('signup_modal'));
    };

    const goToSection = (section_id) => {
        document.getElementById(section_id).scrollIntoView({
            behavior: 'smooth',
        });
        setSelectedOption(section_id);
    };

    return (
        <>
            <div className="sticky top-0 z-10 flex w-[100%] items-center justify-between bg-[transparent] backdrop-blur-[100px]">
                <div
                    className=" flex items-center p-1"
                    onClick={() => window.scrollTo(0, 0)}
                >
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
                                    ? selected_option_style
                                    : null
                            }
                            onClick={() => {
                                goToSection('services');
                            }}
                        >
                            <div
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Services
                            </div>
                        </li>
                        <li
                            className="m-2  cursor-pointer font-bold"
                            style={
                                selectedOption === 'feature'
                                    ? selected_option_style
                                    : null
                            }
                            onClick={() => goToSection('feature')}
                        >
                            <div
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Features
                            </div>
                        </li>
                        <li
                            className="m-2  cursor-pointer font-bold"
                            style={
                                selectedOption === 'team'
                                    ? selected_option_style
                                    : null
                            }
                            onClick={() => goToSection('team')}
                        >
                            <div
                                style={{
                                    textDecoration: 'none',
                                    textDecorationStyle: 'none',
                                    color: 'white',
                                }}
                            >
                                Team
                            </div>
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
                            <li
                                onClick={() => setLocation('/wallet')}
                                className="m-2 cursor-pointer rounded-lg border-[1px] border-[#10D854] p-2 font-bold text-[#10D854]"
                            >
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
