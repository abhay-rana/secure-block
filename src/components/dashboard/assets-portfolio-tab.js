import React from 'react';

const AssetsPortfolioTab = ({ asset_tab, setAssetTab }) => {
    return (
        <section
            id="section_tabs"
            className="my-5 flex w-[300px] cursor-pointer flex-row gap-2 text-xl"
        >
            <div
                onClick={() => setAssetTab('Tokens')}
                className={`w-[70px] flex-1 ${
                    asset_tab === 'Tokens' ? 'border-b-2 border-white' : ''
                } p-2 text-center`}
            >
                <p>Tokens</p>
            </div>
            <div
                onClick={() => setAssetTab('NFT')}
                className={`flex-1 ${
                    asset_tab === 'NFT' ? 'border-b-2  border-white ' : ''
                } p-2 text-center`}
            >
                <p>NFT</p>
            </div>
            <div
                onClick={() => setAssetTab('Activity')}
                className={`flex-1  ${
                    asset_tab === 'Activity' ? 'border-b-2 border-white' : ''
                }  p-2 text-center`}
            >
                <p>Activity</p>
            </div>
        </section>
    );
};

export default AssetsPortfolioTab;
