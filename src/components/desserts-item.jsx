import Button from "./button";

function DessertsItem({ imageUrl, name, type, price, onAddClick }) {
  const onAddDessert = () => {
    let obj = {
      imageUrl: imageUrl,
      name: name,
      text: type,
      price: price,
    };
    onAddClick(obj);
  };
  return (
    <div className="pizza_item">
      <img
        width="320px"
        height="215px"
        src={require(`../assets/img/${imageUrl}`)}
      />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button onClick={onAddDessert}>+ Додати</button>
      </div>
    </div>
  );
}

export default DessertsItem;
