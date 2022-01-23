import React from "react";
import MainSection from "./MainSection";
import CardsInWallet from "./CardsInWallet";

function WalletInfo() {

    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <MainSection/>
                        <CardsInWallet/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WalletInfo;
