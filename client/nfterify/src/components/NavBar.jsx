import React from "react";
import {BiLogOut} from "react-icons/bi";

function NavBar (){

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex">
                        <span
                            className="self-center text-3xl  font-semibold whitespace-nowrap dark:text-black">NFTERITY</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className="nav-item text-black border border-pink-900">
                                <a className="nav-link" href="/">
                                    <BiLogOut className="text-black" name="place" size="30" />
                                    <span className="text-black">LogOut</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;