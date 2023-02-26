import React from 'react';

const AssetNFTCard = () => {
    return (
        <>
            <div className="flex h-[260px] w-[250px] flex-col rounded-md ">
                <div className="h-[180px]">
                    <img
                        src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
                        className="h-[200px] w-full"
                        width=""
                    />
                </div>
                <div
                    id="metadata"
                    className="flex w-full flex-col gap-2 rounded-md bg-[#252A2E] p-2"
                >
                    <div>Name of Nft</div>
                    <div className="flex flex-row">
                        <div id="floor" className="flex flex-1 flex-col">
                            <h3 className="font-semibold text-white/40">
                                Floor
                            </h3>
                            <span className="font-bold">0.07 Eth</span>
                        </div>
                        <div id="token_id" className="flex-1">
                            <h3 className="font-semibold text-white/40">
                                Token Id
                            </h3>
                            <span className="font-bold">#233</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssetNFTCard;
