import {ReactComponent as Logo} from "../assets/svg/home-safeblock-logo.svg";

const Home = () => {
    return (
        <div className="w-full bg-[#0C1013]">

            {/* Header */}
            <div className="w-[100%] flex justify-between items-center">
                <div className=" flex items-center p-1">
                    <Logo className="m-2" />
                    <p className="text-[20px] font-bold">SafeBlock</p>
                </div>
                <div className="logo">
                    <ul className="flex mr-6">
                        <li className="m-2">Sign In</li>
                        <li className="m-2">Sign Up</li>
                    </ul>
                </div>
            </div>

            {/* Intorduction */}

            <div className="w-[100%] flex justify-center items-center mt-10 pb-5 relative">
                <div className="w-[90%] h-[620px] rounded-[40px] bg-[red]"></div>
                <div className="w-[90%] h-[620px] rounded-[40px] bg-[#181C1F] opacity-8 absolute bottom-0 left-4"></div>
            </div>

        </div>
    )
}

export default Home;