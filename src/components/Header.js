import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => ( 
    <a href = "/" >
        <img className = "w-32" src = { LOGO_URL } alt = "Logo" />
    </a>
);

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    [btnName, setBtnName] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-gray-400 shadow-lg mb-2">
            <Title />
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-6 text-lg">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-6"><Link to="/">Home</Link></li>
                    <li className="px-6"><Link to="/about">About</Link></li>
                    <li className="px-6"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6 font-bold text-xl"><Link to="/cart">Cart: ({cartItems.length} items)</Link></li>
                    <button 
                        className="Login px-6"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li  className="px-6">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

