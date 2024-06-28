import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick  = () => {
        setShowIndex();
    }
    return (
        <div className="bg-gray-50 shadow-lg p-4 my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
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
            <div className="bg-gray-50 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer">
                    <span className="font-bold text-lg">
                        {data.title} ({data.categories.length})
                    </span>
                </div>
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