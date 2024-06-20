import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick  = () => {
        setShowIndex();
    }
    return (
        <div>
            <div onClick={handleClick}>
                <span>
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            <div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
      </div>
    );
};

export const forNestedCategory = () => {
    return ({data, showItems, setShowIndex}) => {
        return (
            <div>
                <span>
                {data.title} ({data.categories.length})
            </span>
            {
                data.categories.map((c) => (
                    <RestaurantCategory key={c?.title} data={c} showItems={showItems} setShowIndex={setShowIndex}/>
            ))
            }
            </div>
        );
    };
};

export default RestaurantCategory