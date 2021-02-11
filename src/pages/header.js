import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";

export default function Header(props) {
    const renderSignInheaders = () => {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                        Sign in
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                        Sign up
                    </Link>
                </li>
            </>
        );
    };

    const renderUserHeader = () => {
        return (
            <>
                <li className="nav-item userdropdown">
                    {/* <Link className="nav-link" to={"/sign-in"}>
            {props.userDetails.username}
          </Link> */}
                    <span></span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {props.userDetails.username}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Profile
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item">
                    <Link className="nav-link logoutButton" to={"/sign-in"}>
                        Logout
                    </Link>
                </li>
            </>
        );
    };

    return (
        <>
            <Link className="navbar-brand" to={"/sign-in"}>
                <img src={logo} alt="Logo" height="30px" />
                {/* Qatar Debates */}
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    {props.path === "/home"
                        ? renderUserHeader()
                        : renderSignInheaders()}
                </ul>
            </div>
        </>
    );
}
