import { LOGO_URL } from "../utils/constant";

const Title = () => ( 
    <a href = "/" >
        <img className = "logo" src = { LOGO_URL } alt = "Logo" />
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

