import classNames from "classnames";
import { useState } from "react";

function DrinksItem({ imageUrl, name, type, price }) {
  return (
    <div className="pizza_item">
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button>+ Додати</button>
      </div>
    </div>
  );
}

export default DrinksItem;
