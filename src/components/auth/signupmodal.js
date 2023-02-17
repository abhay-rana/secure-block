import { ReactComponent as Logo } from "../../assets/svg/home-safeblock-logo.svg";
import { MdVerified } from 'react-icons/md'
import { BsCheckAll } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { useConnect } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { getAccount } from "@wagmi/core";
import { useState } from "react";

const connector = new MetaMaskConnector({
    chains: [polygonMumbai],
    options: {
        shimDisconnect: true,
        shimChainChangedDisconnect: false,
    }

})


const SignUpModal = ({ props }) => {
    const { address } = getAccount();
    const { connect, connectors, error, isLoading, pendingConnector, isSuccess } = useConnect();
    const [isNumberValid, setNumberValid] = useState(false);


    const handlePhoneNo = (e) => {
        const text = e.target.value;
        if (text.length > 9) {
            const valid = isValid_Mobile_Number(text);
            setNumberValid(valid);
            console.log(valid, text)
        }
    }

    function isValid_Mobile_Number(mobile_number) {
        let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);

        if (mobile_number == null) {
            return "false";
        }

        if (regex.test(mobile_number) == true) {
            return "true";
        }
        else {
            return "false";
        }
    }

    return (
        <div className="w-full h-full bg-[black] absolute top-0 left-0 flex justify-center items-center">
            <div className="w-[440px] bg-[#181C1F] rounded-[34px] flex justify-center items-center">
                <div className="w-[80%] p-2 m-3">
                    {(props?.logo !== "") ?
                        <div className="flex justify-center itmes-center mt-2 mb-2">
                            <img className="w-[100px] h-[100px] bg-[#0C1013] rounded-full" src={props?.photoURL} alt="logo" />
                        </div>
                        : <div className="flex justify-center itmes-center  mt-2 mb-2">
                            <Logo className="w-[100px] h-[100px] p-5 bg-[#0C1013] rounded-[40px]" />
                        </div>
                    }
                    <div className="flex justify-center items-center">
                        <p className="m-2 text-[20px] font-bold cursor-pointer text-center">{props?.displayName || "Surya Kant Sharma"}</p>
                        {(props?.emailVerified) ? <MdVerified className="text-[#10D854]" /> : null}
                    </div>
                    <p className="m-1 text-[20px] font-normal cursor-pointer text-center">{props?.email}</p>

                    <div className="w-[100%] mt-2 rounded-lg p-0 text-[18px] font-normal mt-2 bg-[#0C1013] flex items-center">
                        {(isNumberValid) ? <BsCheckAll className="w-[28px] h-[28px] text-[#10D854] ml-2" /> : null}
                        <input 
                        type="text" 
                        className=" w-[100%] mt-0 rounded-lg p-3 text-[18px] font-normal mt-2 bg-[#0C1013] text-[white]"
                        style={{border : 'none', outline : 'none'}} 
                        placeholder="Enter Phone No" 
                        required 
                        onChange={handlePhoneNo} />
                    </div>
                    {/* <input type="text" className=" w-[100%] mt-2 rounded-lg p-3 mt-4 bg-[#0C1013] text-[white]" placeholder="Enter Phone Number" required /> */}

                    {(isLoading) ? <div className="flex justify-center items-center mt-6">
                        <TfiReload className="text-[25px] font-bold text-[#10D854]" />
                        <p className="m-1 ml-2 text-[20px] font-normal cursor-pointer text-start"> Connecting...</p>
                    </div> : null}

                    {(isSuccess) ? <div className="w-full flex justify-start items-center mt-6 rounded-lg p-1 mt-2 bg-[#0C1013] overflow-auto">
                        <BsCheckAll className="w-[25px] h-[25px] text-[#10D854] ml-1" />
                        <p className="m-1 ml-4 text-[18px] font-normal cursor-pointer text-center">{address.substring(0, 10) + "..." + address.substring(address.length - 10, address.length)}</p>
                    </div> :
                        <>
                            {(!isLoading) ?
                                <div>
                                    <button className="w-full p-2 border-[2px] border-[#10D854] text-[#10D854] text-[20px] font-bold rounded-md mt-5" onClick={() => connect({ connector })}>Connect Wallet</button>
                                </div> : null}
                        </>
                    }

                    <div>
                        <button className={`w-full p-2 bg-[#10D854] text-[20px] font-bold rounded-md mt-5`} style={{
                            backgroundColor: (isNumberValid && isSuccess) ? '#10D854' : 'gray',
                            opacity: (isNumberValid && isSuccess) ? 1 : 0.4
                        }} disabled >Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;