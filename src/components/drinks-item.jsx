import classNames from "classnames";

function DrinksItem({ imageUrl, name, type, price, id, onAddClick, addedCount }) {
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
  const onRemoveDrink = () => {};

  return (
    <div className="pizza_item">
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        {addedCount > 0 ? (
          <button
            className={classNames({
              active_button: addedCount > 0,
              nohover: addedCount > 0,
            })}
          >
            <div onClick={onAddDrink} className="minbtn">
              +
            </div>{" "}
            <div className="count">{addedCount}</div>{" "}
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
