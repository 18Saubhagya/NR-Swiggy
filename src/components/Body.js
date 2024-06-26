import { API_URL } from "../utils/constant";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    //const {loggedInUser, setUserInfo} = useContext(UserContext);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like tou're offline! Check your internet connection.</h1>
    }

    return restaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={ () => {
                            const filteredRestaurants = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilterRestaurants(filteredRestaurants); 
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => res.info.avgRating > 4);
                        setFilterRestaurants(filteredRestaurants);
                    }}>
                    Top Rated Restaurant 
                </button>
                {/*<div>
                    <label>UserName: </label>
                    <input value={loggedInUser}
                    onChange={(e) => setUserInfo(e.target.value)}/>
                </div>*/}
            </div>
            <div className="res-container">
                {filterRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >
                        {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;