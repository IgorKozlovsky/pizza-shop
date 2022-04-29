import React from "react";
import PropTypes from "prop-types";

function CartItem({ obj, index, lengthOfarr, onAddClick, onRemoveClick }) {
  const { id, imageUrl, name, text, type, size, price } = obj;
  const onAddPizza = () => {
    let obj;
    switch (index) {
      case "pizza":
        //prettier-ignore
        obj = {id, imageUrl, name, text, type, size, price,};
        break;
      default:
        obj = { id, imageUrl, name, type, price };
        break;
    }
    onAddClick(obj, index);
  };
  const onRemovePizza = () => {
    let obj;
    switch (index) {
      case "pizza":
        //prettier-ignore
        obj = {id, imageUrl, name, text, type, size, price,};
        break;
      default:
        obj = { id, imageUrl, name, type, price };
        break;
    }
    onRemoveClick(obj, index);
  };
  return (
    <div key={`${obj.id}${obj.type}${obj.size}`} className="cart_item">
      <img src={require(`../assets/img/${obj.imageUrl}`)} />
      <div className="cart_item_wrapper">
        <div>
          <h2>{obj.name}</h2>
          <p className="type_item_cart">
            {obj.type}
            {index === "pizza" ? `, ${obj.size} см` : ""}
          </p>
        </div>
        <p className="price_item_cart">{obj.price * lengthOfarr}₴</p>
      </div>
      <button className="active_button nohover">
        <div className="minbtn" onClick={onAddPizza}>
          +
        </div>{" "}
        <div className="count">{lengthOfarr}</div>{" "}
        <div className="minbtn" onClick={onRemovePizza}>
          -
        </div>
      </button>
    </div>
  );
}

CartItem.propTypes = {
  obj: PropTypes.object,
  index: PropTypes.string,
  lengthOfarr: PropTypes.number,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

export default CartItem;
