import classNames from "classnames";
function DessertsItem({ imageUrl, name, type, price, id, onAddClick, addedCount, onRemoveClick }) {
  const onAddDessert = () => {
    let obj = {
      id,
      imageUrl,
      name,
      type,
      price,
    };
    onAddClick(obj, "desserts");
  };
  const onRemoveDessert = () => {
    onRemoveClick();
  };

  return (
    <div className="pizza_item">
      <img width="320px" height="215px" src={require(`../assets/img/${imageUrl}`)} />
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
            <div onClick={onAddDessert} className="minbtn">
              +
            </div>{" "}
            <div className="count">{addedCount}</div>{" "}
            <div onClick={onRemoveDessert} className="minbtn">
              -
            </div>
          </button>
        ) : (
          <button onClick={onAddDessert}>В кошик</button>
        )}
      </div>
    </div>
  );
}

export default DessertsItem;
