import classNames from "classnames";
import { useEffect, useState } from "react";

function PizzaItem({ id, imageUrl, name, text, types, sizes, price, onAddClick, addedCount }) {
  const varietyOfTypes = ["Звичайний", "Тонкий", "Без бортів"];
  const varietyOfSizes = sizes;
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const [newPrice, setNewPrice] = useState(price);

  const onSizeChange = (index) => {
    setActiveSize(index);
  };
  const onTypeChange = (index) => {
    setActiveType(index);
  };
  useEffect(() => {
    let valueSize = 0;
    switch (activeSize) {
      case 0:
        valueSize = 0;
        break;
      case 1:
        valueSize = 20;
        break;
      case 2:
        valueSize = 60;
        break;

      default:
        valueSize = 0;
        break;
    }
    let valueType = 0;
    switch (activeType) {
      case 0:
        valueType = 0;
        break;
      case 1:
        valueType = 15;
        break;
      case 2:
        valueType = 25;
        break;

      default:
        valueType = 0;
        break;
    }

    let value = price + valueSize + valueType;
    setNewPrice(value);
  }, [activeSize, activeType]);

  const onAddPizza = () => {
    let obj = {
      id,
      imageUrl,
      name,
      text,
      type: varietyOfTypes[activeType],
      size: varietyOfSizes[activeSize],
      price: newPrice,
    };
    onAddClick(obj, "pizza");
  };

  const onRemovePizza = () => {};
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
        <p>{newPrice}₴</p>
        {addedCount &&
        addedCount[`${varietyOfTypes[activeType]}${varietyOfSizes[activeSize]}`] &&
        addedCount[`${varietyOfTypes[activeType]}${varietyOfSizes[activeSize]}`].length > 0 ? (
          <button className="active_button nohover">
            <div onClick={onAddPizza} className="minbtn">
              +
            </div>{" "}
            <div className="count">
              {addedCount[`${varietyOfTypes[activeType]}${varietyOfSizes[activeSize]}`].length}
            </div>{" "}
            <div onClick={onRemovePizza} className="minbtn">
              -
            </div>
          </button>
        ) : (
          <button onClick={onAddPizza}>В кошик</button>
        )}
      </div>
    </div>
  );
}

export default PizzaItem;
