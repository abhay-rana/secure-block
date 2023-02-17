import SignUpModal from "components/auth/signupmodal";
import useAuth from "hooks/useAuth";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '../assets/lottieFiles/safeblock';
import { ReactComponent as Logo } from "../assets/svg/home-safeblock-logo.svg";
import './style.css'

const Home = () => {

    const { isSuccess, user, isError, isLogin, error, signUp } = useAuth();
    const [selectedOption, setSelectedOption] = useState();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const selectOption = { borderBottomColor: '#10D854', borderBottomWidth: 2, borderRadius: 4 }


    return (
        <div className="w-full m-0 p-0 bg-[#0C1013] relative">
            {/* Header */}
            <div className="w-[100%] flex justify-between items-center sticky backdrop-blur-[100px] top-0 bg-[transparent] z-10">
                <div className=" flex items-center p-1">
                    <Logo className="m-2" />
                    <p className="text-[20px] font-bold inter-font">SafeBlock</p>
                </div>
                <div className="logo">
                    <ul className="flex mr-6">
                        <li className="m-2  font-bold cursor-pointer" style={(selectedOption === "services") ? selectOption : null} onClick={() => { setSelectedOption("services") }}><a href="#services" style={{ textDecoration: 'none', textDecorationStyle: 'none', color: 'white' }}>Services</a></li>
                        <li className="m-2  font-bold cursor-pointer" style={(selectedOption === "feature") ? selectOption : null} onClick={() => setSelectedOption("feature")}><a href="#feature" style={{ textDecoration: 'none', textDecorationStyle: 'none', color: 'white' }}>Features</a></li>
                        <li className="m-2  font-bold cursor-pointer" style={(selectedOption === "team") ? selectOption : null} onClick={() => setSelectedOption("team")}><a href="#team" style={{ textDecoration: 'none', textDecorationStyle: 'none', color: 'white' }}>Team</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <ul className="flex mr-6">
                        {(!isLogin) ? <>
                            <li className="m-2 text-[#10D854] font-bold cursor-pointer">Sign In</li>
                            <li className="m-2 text-[#10D854] font-bold cursor-pointer" onClick={signUp}>Sign Up</li>
                        </>
                            : <li className="m-2 border-[1px] border-[#10D854] p-2 rounded-lg text-[#10D854] font-bold cursor-pointer">Dashboard</li>
                        }
                    </ul>
                </div>
            </div>

            {/* Intorduction */}

            <div className="w-[100%] flex justify-center items-center mt-[60px] pb-5 relative">
                <div className="w-[85%] h-[620px] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="w-[85%] h-[620px] rounded-[40px] bg-[#181C1F] absolute -top-5 left-[6%] flex items-center justify-between">
                    <div className="w-[40%] flex justify-end">
                        <div className="w-[95%] pl-20">
                            <p className="text-[50px] font-bold m-0 p-0 space-y-1">Safe Your <span className="text-[#10D854] m-0 p-0">Assets</span></p>
                            <p className="text-[50px] font-bold m-0 p-0 space-y-1">With <span className="text-[#10D854]">SafeBlock</span></p>
                            <button className="w-[200px] p-2 bg-[#10D854] rounded-full mt-5">Try Now</button>
                        </div>
                    </div>
                    <div className="w-[40%] relative">
                        <img className="w-[60px] h-[60px] rounded-full shake-y-d-anim absolute -left-9 bottom-0" src="https://i.pinimg.com/564x/9b/1e/97/9b1e977d00b5d887608b156705a10759.jpg" alt="polygon-logo" />
                        <img className="w-[140px] h-[140px] rounded-full shake-d-anim absolute -right-9 bottom-70" src="https://static.vecteezy.com/system/resources/thumbnails/010/877/530/small/3d-illustration-ethereum-coin-and-nft-coin-free-png.png" alt="polygon-logo" />
                        <img className="w-[60px] h-[60px] rounded-full shake-x-anim absolute left-2 top-0" src="https://w7.pngwing.com/pngs/917/678/png-transparent-tether-tether-coin-cryptocurrency-logo-bitcoin-crypto-currency-cryptocurrency-sign-3d-icon-thumbnail.png" alt="polygon-logo" />
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

            <div id="feature" className="w-[100%] flex justify-center items-center mt-[60px] pb-5 relative">
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] absolute -top-5 left-[6%] ">
                    <p className="text-[40px] mt-6 text-center font-bold mb-4 p-0 text-[#10D854]">Features</p>
                    <div className="flex items-center justify-center">
                        <div className="w-[25%] flex justify-center items-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Every Time when you transfer you assets from smart contract wallet to any other wallet you need an otp. That make you assets more secure no one can withdraw withdraw your assets without you permission </p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Backup your  assets from the smart contract wallet when your private key lost and compromise with  any one and you can freeze your assets with our dashboard and with you partner help.</p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg" style={{ objectFit: 'cover' }} alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Make partner for you smart contract wallet make you assets more secure. and you can save your assets with any unauthorized person try to withdraw your assets with out your permission</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Our Servvices */}

            <div id="services" className="w-[100%] flex justify-center items-center mt-[60px] pb-5 relative">
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] absolute -top-5 left-[6%] ">
                    <p className="text-[40px] mt-6 text-center font-bold mb-4 p-0 text-[#10D854]">Our Services</p>
                    <div className="flex items-center justify-center">
                        <div className="w-[25%] flex justify-center items-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Every Time when you transfer you assets from smart contract wallet to any other wallet you need an otp. That make you assets more secure no one can withdraw withdraw your assets without you permission </p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Backup your  assets from the smart contract wallet when your private key lost and compromise with  any one and you can freeze your assets with our dashboard and with you partner help.</p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg" style={{ objectFit: 'cover' }} alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Make partner for you smart contract wallet make you assets more secure. and you can save your assets with any unauthorized person try to withdraw your assets with out your permission</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FAQ */}

            <div id='faq' className="w-[100%] flex justify-center items-center mt-[60px] pb-5 relative">
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] absolute -top-5 left-[6%] ">
                    <p className="text-[40px] mt-6 text-center font-bold mb-4 p-0 text-[#10D854]">FAQ</p>
                    <div className="flex items-center justify-center">
                        <div className="w-[25%] flex justify-center items-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Every Time when you transfer you assets from smart contract wallet to any other wallet you need an otp. That make you assets more secure no one can withdraw withdraw your assets without you permission </p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Backup your  assets from the smart contract wallet when your private key lost and compromise with  any one and you can freeze your assets with our dashboard and with you partner help.</p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg" style={{ objectFit: 'cover' }} alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Make partner for you smart contract wallet make you assets more secure. and you can save your assets with any unauthorized person try to withdraw your assets with out your permission</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Team  */}

            <div id='team' className="w-[100%] flex justify-center items-center mt-[60px] pb-5 relative">
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] opacity-25"></div>
                <div className="w-[85%] h-[660px] rounded-[40px] bg-[#181C1F] absolute -top-5 left-[6%] ">
                    <p className="text-[40px] mt-6 text-center font-bold mb-4 p-0 text-[#10D854]">Team</p>
                    <div className="flex items-center justify-center">
                        <div className="w-[25%] flex justify-center items-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://www.10duke.com/wp-content/uploads/2019/01/OTP-1-e1650544725265.png" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Every Time when you transfer you assets from smart contract wallet to any other wallet you need an otp. That make you assets more secure no one can withdraw withdraw your assets without you permission </p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" style={{ objectFit: 'cover' }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/supportapphero/restore-backup-ios-hero.jpg" alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Backup your  assets from the smart contract wallet when your private key lost and compromise with  any one and you can freeze your assets with our dashboard and with you partner help.</p>
                            </div>
                        </div>
                        <div className="w-[25%] flex justify-center m-6 bg-[#0C1013] rounded-[10px] overflow-hidden">
                            <div className="w-[100%] h-[480px] pl-0 ">
                                <img className="w-[100%] h-[250px]" src="https://upload.wikimedia.org/wikipedia/en/2/24/Partner_logo.svg" style={{ objectFit: 'cover' }} alt="logo" />
                                <p className="text-[17px] p-3 mt-4 font-normal">Make partner for you smart contract wallet make you assets more secure. and you can save your assets with any unauthorized person try to withdraw your assets with out your permission</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {(isSuccess) ? <SignUpModal props={user} /> : null}

        </div>
    )
}

export default Home;