import classNames from "classnames";
import { useState } from "react";
import { PizzaLoading } from "./Loadings";

function PizzaItem({ imageUrl, name, text, types, sizes, price }) {
  const varietyOfTypes = ["Звичайний", "Тонкий", "Без бортів"];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSizeChange = (index) => {
    setActiveSize(index);
  };
  const onTypeChange = (index) => {
    setActiveType(index);
  };

  return (
    <div className="pizza_item">
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{text}</h4>
      <div className="pizza_selector_wrapper">
        <ul>
          {sizes.map((size, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onSizeChange(index);
                }}
                className={classNames({
                  active: activeSize === index,
                })}
              >
                {size} см
              </li>
            );
          })}
        </ul>
        <ul>
          {types.map((type, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onTypeChange(index);
                }}
                className={classNames({
                  active: activeType === index,
                })}
              >
                {varietyOfTypes[type]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button>+ Додати</button>
      </div>
    </div>
  );
}

export default PizzaItem;
