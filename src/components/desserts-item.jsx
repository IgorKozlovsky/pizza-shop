import PropTypes from "prop-types";

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
    let obj = {
      id,
      type,
    };
    onRemoveClick(obj);
  };

  return (
    <div className="pizza_item">
      <img width="320px" height="215px" src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        {addedCount && addedCount[`${type}`] && addedCount[`${type}`].length > 0 ? (
          <button className="active_button nohover">
            <div onClick={onAddDessert} className="minbtn">
              +
            </div>{" "}
            <div className="count">{addedCount[`${type}`].length}</div>{" "}
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

DessertsItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  onAddClick: PropTypes.func,
  addedCount: PropTypes.object,
  onRemoveClick: PropTypes.func,
};

DessertsItem.defaultProps = {
  name: "---",
  price: 0,
  types: " ",
};

export default DessertsItem;
