function DrinksItem({ imageUrl, name, type, price, onAddClick }) {
  const onAddDrink = () => {
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
      <img src={require(`../assets/img/${imageUrl}`)} />
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="pizza_add_wrapper">
        <p>{price}₴</p>
        <button onClick={onAddDrink}>+ Додати</button>
      </div>
    </div>
  );
}

export default DrinksItem;
