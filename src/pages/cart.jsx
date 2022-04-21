import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemsWrapper from "../components/cart-item-wrapper";
import Form from "../components/form";

function Cart() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const { pizza, drinks, desserts } = useSelector(({ cart }) => cart.items);

  return (
    <div className="cart_wrapper">
      {totalCount ? (
        <>
          <main className="cart_main">
            <Form />
          </main>
          <section className="cart_side_wrapper">
            <article className="cart_side" id="cart_side_scroll">
              <CartItemsWrapper key={"pizza"} index={"pizza"} obj={pizza} />
              <CartItemsWrapper key={"drinks"} index={"drinks"} obj={drinks} />
              <CartItemsWrapper key={"desserts"} index={"desserts"} obj={desserts} />
            </article>
            <article className="cart_side_sum">
              <p>{totalPrice}.00 ₴</p>
            </article>
          </section>
        </>
      ) : (
        <div className="cart_empty">
          <h2>Кошик порожній 😔</h2>
          <p>
            Найімовірніше, ви не замовляли ще піцу.
            <br />
            Щоб замовити піцу, перейдіть на головну сторінку.
          </p>
          <div className="btn_back">
            <Link to="/">Назад</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
