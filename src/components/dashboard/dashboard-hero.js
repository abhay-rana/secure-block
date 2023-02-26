import React, { useEffect } from 'react';
import { ReactComponent as CopySVG } from 'assets/svg/copy.svg';
import { useAccount, useEnsAvatar } from 'wagmi';

const DashboardHero = () => {
    const { address, isConnected } = useAccount();
    const { data, isError, isLoading } = useEnsAvatar({ address });

    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <section id="dashboard_hero" className="flex flex-col gap-3">
            {/* user_image */}
            <div>
                <img src="/assets/cat.png" />
            </div>
            {/* user_name */}
            <div></div>
            {/* user_address */}
            <div className="flex flex-row gap-2">
                <div className="text-gray-400">suryakant.eth</div>
                <CopySVG className="h-5 w-5 self-center" />
            </div>
        </section>
    );
};

export default DashboardHero;
