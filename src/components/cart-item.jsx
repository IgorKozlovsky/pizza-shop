function CartItem({ imageUrl, name, type, price, onAddClick, addedCount, onRemoveClick }) {
  return (
    <div className="cart_item">
      <img src={require(`../assets/img/diablo.jpeg`)} />
      <div className="cart_item_wrapper">
        <div>
          <h2>Сирна піца</h2>
          <p className="type_item_cart">Звичайна, 30 см</p>
        </div>
        <p className="price_item_cart">200₴</p>
      </div>
      <button className="active_button nohover">
        <div className="minbtn">+</div> <div className="count">1</div> <div className="minbtn">-</div>
      </button>
    </div>
  );
}

export default CartItem;
