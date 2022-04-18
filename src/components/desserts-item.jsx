function DessertsItem({ imageUrl, name, type, price, id, onAddClick, addedCount }) {
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
  return (
    <div className="pizza_item">
      <img width="320px" height="215px" src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button onClick={onAddDessert}>{addedCount > 0 ? `+ -` : `В кошик`}</button>
      </div>
    </div>
  );
}

export default DessertsItem;
