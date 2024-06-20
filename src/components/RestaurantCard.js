import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    //console.log(props);
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0f"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};

export const withPromotedLabel = () => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;