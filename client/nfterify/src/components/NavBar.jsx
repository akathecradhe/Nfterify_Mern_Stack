import React, {useState} from "react";

function NavBar (){

    return (
        <div>

            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NFTERIFY
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a  className="nav-link" href="/">Home</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;