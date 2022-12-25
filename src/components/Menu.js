import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/q3">
                                Q3
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/q4">
                                Q4
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/q5">
                                Q5
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/q6">
                                Q6
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
