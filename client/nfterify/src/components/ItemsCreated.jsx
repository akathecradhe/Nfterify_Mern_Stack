import React, from "react";
import MainSection from "./MainSection";
import AdminTabCreate from "./AdminTabCreate";


export default function ItemsCreated() {

    return(
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <MainSection />
                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <AdminTabCreate />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}