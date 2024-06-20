import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory, { forNestedCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
    
    const resInfo = useRestaurantMenu(resId);
    //console.log(resInfo);

    if(resInfo === null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => (c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        || c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        );
    
    const RestaurantNested = forNestedCategory(RestaurantCategory);
    //console.log(categories);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {
                categories.map((category, index) => (
                    (category.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ? 
                    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/> : 
                    <RestaurantNested key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
                )
            )}
        </div>
    );
}

export default RestaurantMenu;