import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cart-item";

function Cart() {
  const { totalPrice } = useSelector(({ cart }) => cart);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  return (
    <div className="cart_wrapper">
      <main className="cart_main">
        <h2>Контакти:</h2>
        <input type="number" required placeholder="Телефон"></input>
        <h2>Адреса:</h2>
        <article>
          <input type="text" required placeholder="Місто"></input>
          <input type="text" required placeholder="Вулиця"></input>
          <input type="text" required placeholder="Будинок"></input>
          <input type="number" required placeholder="Квартира"></input>
          <input type="text" required placeholder="Підїзд"></input>
          <input type="text" required placeholder="Код"></input>
          <input type="number" required placeholder="Поверх"></input>
        </article>
        <textarea rows="5" cols="37" placeholder="Коментар"></textarea>
        <h2>Дата та час:</h2>
        <input type="text" required placeholder="Дата"></input>
        <input type="text" required placeholder="Час"></input>
        <h2>Оплата:</h2>
        <select>
          <option value="">Готівка</option>
          <option value="">Карткою кур'єру</option>
        </select>
        <div>
          <p>Усьго: {totalPrice}.00 ₴</p>
          <button>Заказати</button>
        </div>
      </main>
      <section className="cart_side_wrapper">
        <article className="cart_side">
          {/* {isLoaded
          ? items.map((obj) => {
              return <PizzaItem key={obj.id} addedCount={cartItems[obj.id]} {...obj} onAddClick={onAddClick} />;
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoading key={index} />)} */}
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </article>
        <article className="cart_side_sum">
          <p>{totalPrice}.00 ₴</p>
        </article>
      </section>
    </div>
  );
}

export default Cart;
