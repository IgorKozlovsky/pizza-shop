import classNames from "classnames";

function DrinksItem({ imageUrl, name, type, price, id, onAddClick, addedCount, onRemoveClick }) {
  const onAddDrink = () => {
    let obj = {
      id,
      imageUrl,
      name,
      type,
      price,
    };
    onAddClick(obj, "drinks");
  };
  const onRemoveDrink = () => {
    let obj = {
      id,
      type,
    };
    onRemoveClick(obj);
  };

  return (
    <div className="pizza_item">
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        {addedCount && addedCount[`${type}`] && addedCount[`${type}`].length > 0 ? (
          <button className="active_button nohover">
            <div onClick={onAddDrink} className="minbtn">
              +
            </div>{" "}
            <div className="count">{addedCount[`${type}`].length}</div>{" "}
            <div onClick={onRemoveDrink} className="minbtn">
              -
            </div>
          </button>
        ) : (
          <button onClick={onAddDrink}>В кошик</button>
        )}
      </div>
    </div>
  );
}

export default DrinksItem;
