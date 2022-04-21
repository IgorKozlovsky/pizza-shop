import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Form() {
  //prettier-ignore
  const { items, totalPrice } = useSelector(({ cart }) => cart);
  //prettier-ignore

  const { register, handleSubmit, formState: { errors } } = useForm();
  const inpOptions = { required: true, maxLength: 40, minLength: 1 };
  const onSubmit = (data) => {
    let text = " \n\n";
    Object.values(items).map((e) => {
      return Object.values(e).map((element) =>
        Object.values(element).map((el) => {
          for (let i = 0; i < el.length; i++) {
            //prettier-ignore
            text = text.concat(`   ${el[i].name}, ${el[i].type}${el[i].size  ? `, ${el[i].size} см` : ""}, ${el[i].price}₴  \n`);
          }
        })
      );
    });
    console.log(
      `
  //  Замовлення: ${text}
  //  Cума замовлення: ${totalPrice}₴
  //  Номер телефону: ${data.tel}
  //  Адреса: ${data.city}, ${data.road}, ${data.house}, ${data.flat}, ${data.entrance}, ${data.code}, ${data.floor}
  //  Коментар: ${data.comm}
  //  Дата та час: ${data.date} ${data.time}
  //  Оплата: ${data.pay}
   `
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Контакти:</h2>
      <input {...register("tel", { required: true })} type="tel" placeholder="Телефон"></input>
      <h2>Адреса:</h2>
      <article>
        <input {...register("city", inpOptions)} type="text" placeholder="Місто"></input>
        <input {...register("road", inpOptions)} type="text" placeholder="Вулиця"></input>
        <input {...register("house", inpOptions)} type="text" placeholder="Будинок"></input>
        <input {...register("flat", inpOptions)} type="number" placeholder="Квартира"></input>
        <input {...register("entrance", inpOptions)} type="text" placeholder="Підїзд"></input>
        <input {...register("code", inpOptions)} type="text" placeholder="Код"></input>
        <input {...register("floor", inpOptions)} type="number" placeholder="Поверх"></input>
      </article>
      <textarea {...register("comm")} rows="5" cols="37" placeholder="Коментар"></textarea>
      <h2>Дата та час:</h2>
      <input {...register("date", inpOptions)} type="text" placeholder="Дата"></input>
      <input {...register("time", inpOptions)} type="text" placeholder="Час"></input>
      <h2>Оплата:</h2>
      <select {...register("pay")}>
        <option value="Готівка">Готівка</option>
        <option value="Карткою кур'єру">Карткою кур'єру</option>
      </select>
      <div>
        <p>Усього: {totalPrice}.00 ₴</p>
        <input className="inp_submt" type="submit" value="Заказати" />
      </div>
    </form>
  );
}
