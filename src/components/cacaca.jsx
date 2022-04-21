import React from "react";

function Cacaca({ obj, index }) {
  return (
    <div key={e[prop][0].id} className="cart_item">
      <img src={require(`../assets/img/${e[prop][0].imageUrl}`)} />
      <div className="cart_item_wrapper">
        <div>
          <h2>{e[prop][0].name}</h2>
          <p className="type_item_cart">
            {prop.replace(/ /g, ", ")} {index === "pizza" ? "см" : ""}
          </p>
        </div>
        <p className="price_item_cart">{e[prop][0].price}₴</p>
      </div>
      <button className="active_button nohover">
        <div className="minbtn">+</div> <div className="count">{e[prop].length}</div> <div className="minbtn">-</div>
      </button>
    </div>
  );
}

export default Cacaca;
