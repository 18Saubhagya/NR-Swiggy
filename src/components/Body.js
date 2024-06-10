import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => res.data.avgRating > 4);
                        setRestaurants(filteredRestaurants);
                    }}>
                    Top Rated Restaurant 
                </button>
            </div>
            <div className="res-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;