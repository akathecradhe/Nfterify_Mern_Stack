import React from "react";

function NavBar (){

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex">
                        <span
                            className="self-center text-2xl  font-semibold whitespace-nowrap dark:text-black">NFTERITY</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <i className="bi bi-box-arrow-left"></i> home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">*/}
            {/*    <div className="container flex flex-wrap justify-between items-center mx-auto">*/}
            {/*        <a className="flex " href="/">NFTERIFY*/}
            {/*        </a>*/}
            {/*        <ul className="navbar-nav">*/}
            {/*            <li className="nav-item "><a  className="nav-link " href="/">Home</a></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </div>
    )
};

export default NavBar;