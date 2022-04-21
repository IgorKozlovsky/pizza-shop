import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CartItemsWrapper from "../components/cart-item-wrapper";

function Cart() {
  //prettier-ignore
  const {data, handleSubmit, formState: { errors }} = useForm();
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const { pizza, drinks, desserts } = useSelector(({ cart }) => cart.items);
  console.log(errors);
  const onCollectData = () => {
    let text = " \n\n";
    Object.values(items).map((e) => {
      return Object.values(e).map((element) =>
        Object.values(element).map((el) => {
          for (let i = 0; i < el.length; i++) {
            //prettier-ignore
            text = text.concat(`        ${el[i].name}, ${el[i].type}${el[i].size  ? `, ${el[i].size} см` : ""}, ${el[i].price}₴  \n`);
          }
        })
      );
    });
    console.log(
      `
    //  Замовлення: ${text}
    //  Cума замовлення: ${totalPrice}
    //  Номер телефону: ${"dd"}
    //  Адреса: ${"dd"}
    //  Коментар: ${"dd"}
    //  Дата та час: ${"dd"}
    //  Оплата: ${"dd"}
     `
    );
  };
  const onSubmit = (data) => console.log(data);
  const inpOptions = { required: true, maxLength: 40, minLength: 1 };
  return (
    <div className="cart_wrapper">
      {totalCount ? (
        <>
          <main className="cart_main">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Контакти:</h2>
              <input {...data("tel", { required: true })} type="tel" placeholder="Телефон"></input>
              <h2>Адреса:</h2>
              <article>
                <input {...data("city", inpOptions)} type="text" placeholder="Місто"></input>
                <input {...data("road", inpOptions)} type="text" placeholder="Вулиця"></input>
                <input {...data("house", inpOptions)} type="text" placeholder="Будинок"></input>
                <input {...data("flat", inpOptions)} type="number" placeholder="Квартира"></input>
                <input {...data("entrance", inpOptions)} type="text" placeholder="Підїзд"></input>
                <input {...data("code", inpOptions)} type="text" placeholder="Код"></input>
                <input {...data("floor", inpOptions)} type="number" placeholder="Поверх"></input>
              </article>
              <textarea {...data("comm")} rows="5" cols="37" placeholder="Коментар"></textarea>
              <h2>Дата та час:</h2>
              <input {...data("date", inpOptions)} type="text" placeholder="Дата"></input>
              <input {...data("time", inpOptions)} type="text" placeholder="Час"></input>
              <h2>Оплата:</h2>
              <select {...data("pay")}>
                <option value="Готівка">Готівка</option>
                <option value="Карткою кур'єру">Карткою кур'єру</option>
              </select>
              {/*onClick={onCollectData}*/}
              <div>
                <p>Усьго: {totalPrice}.00 ₴</p>
                <input type="submit">Заказати</input>
              </div>
            </form>
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
