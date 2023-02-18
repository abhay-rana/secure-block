import { useState } from 'react';
import { useAuth } from 'provider/auth-providers';

import './style.css';

import Lottie from 'react-lottie';
import animationData from '../assets/lottieFiles/safeblock';

import SignUpModal from 'components/auth/signupmodal';

const Home = () => {
    const { user } = useAuth();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="relative m-0 w-full bg-[#0C1013] p-0">
            {/* Introduction */}

            <div className="relative mt-[60px] flex w-[100%] items-center justify-center pb-5">
                <div className="h-[620px] w-[85%] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="absolute -top-5 left-[6%] flex h-[620px] w-[85%] items-center justify-between rounded-[40px] bg-[#181C1F]">
                    <div className="flex w-[40%] justify-end">
                        <div className="w-[95%] pl-20">
                            <p className="m-0 space-y-1 p-0 text-[50px] font-bold">
                                Safe Your{' '}
                                <span className="m-0 p-0 text-[#10D854]">
                                    Assets
                                </span>
                            </p>
                            <p className="m-0 space-y-1 p-0 text-[50px] font-bold">
                                With{' '}
                                <span className="text-[#10D854]">
                                    SafeBlock
                                </span>
                            </p>
                            <button className="mt-5 w-[200px] rounded-full bg-[#10D854] p-2">
                                Try Now
                            </button>
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img
                            className="shake-y-d-anim absolute -left-9 bottom-0 h-[60px] w-[60px] rounded-full"
                            src="https://i.pinimg.com/564x/9b/1e/97/9b1e977d00b5d887608b156705a10759.jpg"
                            alt="polygon-logo"
                        />
                        <img
                            className="shake-d-anim bottom-70 absolute -right-9 h-[140px] w-[140px] rounded-full"
                            src="https://static.vecteezy.com/system/resources/thumbnails/010/877/530/small/3d-illustration-ethereum-coin-and-nft-coin-free-png.png"
                            alt="polygon-logo"
                        />
                        <img
                            className="shake-x-anim absolute left-2 top-0 h-[60px] w-[60px] rounded-full"
                            src="https://w7.pngwing.com/pngs/917/678/png-transparent-tether-tether-coin-cryptocurrency-logo-bitcoin-crypto-currency-cryptocurrency-sign-3d-icon-thumbnail.png"
                            alt="polygon-logo"
                        />
                        <div className="shake-y-anim">
                            <Lottie
                                options={defaultOptions}
                                height={500}
                                width={'100%'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*  Feature  */}

            <div
                id="feature"
                className="relative mt-[60px] flex w-[100%] items-center justify-center pb-5"
            >
                <div className="h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="absolute -top-5 left-[6%] h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] ">
                    <p className="mt-6 mb-4 p-0 text-center text-[40px] font-bold text-[#10D854]">
                        Features
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="m-6 flex w-[25%] items-center justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Every Time when you transfer you assets from
                                    smart contract wallet to any other wallet
                                    you need an otp. That make you assets more
                                    secure no one can withdraw withdraw your
                                    assets without you permission{' '}
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Backup your assets from the smart contract
                                    wallet when your private key lost and
                                    compromise with any one and you can freeze
                                    your assets with our dashboard and with you
                                    partner help.
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg"
                                    style={{ objectFit: 'cover' }}
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Make partner for you smart contract wallet
                                    make you assets more secure. and you can
                                    save your assets with any unauthorized
                                    person try to withdraw your assets with out
                                    your permission
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services */}

            <div
                id="services"
                className="relative mt-[60px] flex w-[100%] items-center justify-center pb-5"
            >
                <div className="h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="absolute -top-5 left-[6%] h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] ">
                    <p className="mt-6 mb-4 p-0 text-center text-[40px] font-bold text-[#10D854]">
                        Our Services
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="m-6 flex w-[25%] items-center justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Every Time when you transfer you assets from
                                    smart contract wallet to any other wallet
                                    you need an otp. That make you assets more
                                    secure no one can withdraw withdraw your
                                    assets without you permission{' '}
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Backup your assets from the smart contract
                                    wallet when your private key lost and
                                    compromise with any one and you can freeze
                                    your assets with our dashboard and with you
                                    partner help.
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg"
                                    style={{ objectFit: 'cover' }}
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Make partner for you smart contract wallet
                                    make you assets more secure. and you can
                                    save your assets with any unauthorized
                                    person try to withdraw your assets with out
                                    your permission
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}

            <div
                id="faq"
                className="relative mt-[60px] flex w-[100%] items-center justify-center pb-5"
            >
                <div className="h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="absolute -top-5 left-[6%] h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] ">
                    <p className="mt-6 mb-4 p-0 text-center text-[40px] font-bold text-[#10D854]">
                        FAQ
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="m-6 flex w-[25%] items-center justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Every Time when you transfer you assets from
                                    smart contract wallet to any other wallet
                                    you need an otp. That make you assets more
                                    secure no one can withdraw withdraw your
                                    assets without you permission{' '}
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Backup your assets from the smart contract
                                    wallet when your private key lost and
                                    compromise with any one and you can freeze
                                    your assets with our dashboard and with you
                                    partner help.
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg"
                                    style={{ objectFit: 'cover' }}
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Make partner for you smart contract wallet
                                    make you assets more secure. and you can
                                    save your assets with any unauthorized
                                    person try to withdraw your assets with out
                                    your permission
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team  */}

            <div
                id="team"
                className="relative mt-[60px] flex w-[100%] items-center justify-center pb-5"
            >
                <div className="h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="absolute -top-5 left-[6%] h-[660px] w-[85%] rounded-[40px] bg-[#181C1F] ">
                    <p className="mt-6 mb-4 p-0 text-center text-[40px] font-bold text-[#10D854]">
                        Team
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="m-6 flex w-[25%] items-center justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Every Time when you transfer you assets from
                                    smart contract wallet to any other wallet
                                    you need an otp. That make you assets more
                                    secure no one can withdraw withdraw your
                                    assets without you permission{' '}
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    style={{ objectFit: 'cover' }}
                                    src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg"
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Backup your assets from the smart contract
                                    wallet when your private key lost and
                                    compromise with any one and you can freeze
                                    your assets with our dashboard and with you
                                    partner help.
                                </p>
                            </div>
                        </div>
                        <div className="m-6 flex w-[25%] justify-center overflow-hidden rounded-[10px] bg-[#0C1013]">
                            <div className="h-[480px] w-[100%] pl-0 ">
                                <img
                                    className="h-[250px] w-[100%]"
                                    src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg"
                                    style={{ objectFit: 'cover' }}
                                    alt="logo"
                                />
                                <p className="mt-4 p-3 text-[17px] font-normal">
                                    Make partner for you smart contract wallet
                                    make you assets more secure. and you can
                                    save your assets with any unauthorized
                                    person try to withdraw your assets with out
                                    your permission
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal  */}
            <SignUpModal user={user} id="signup_modal" />
        </div>
    );
};

export default Home;
