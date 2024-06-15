import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => ( 
    <a href = "/" >
        <img className = "logo" src = { LOGO_URL } alt = "Logo" />
    </a>
);

const Header = () => {
    const onlineStatus = useOnlineStatus();

    [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button 
                        className="Login"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

