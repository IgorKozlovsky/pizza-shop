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
  return (
    <div className="pizza_item">
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button onClick={onAddDrink}>
          <span>{addedCount}</span> В кошик
        </button>
      </div>
    </div>
  );
}

export default DrinksItem;
