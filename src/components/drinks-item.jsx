import PropTypes from "prop-types";

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

DrinksItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  onAddClick: PropTypes.func,
  addedCount: PropTypes.object,
  onRemoveClick: PropTypes.func,
};

DrinksItem.defaultProps = {
  name: "---",
  price: 0,
  types: " ",
};

export default DrinksItem;
