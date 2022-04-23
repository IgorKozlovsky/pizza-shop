import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../redux/action/cart";

export default function Form() {
  const dispatch = useDispatch();
  //prettier-ignore
  const { items, totalPrice } = useSelector(({ cart }) => cart);
  //prettier-ignore

  const { register, handleSubmit, formState: { errors } } = useForm();
  const inpOptions = { required: true, maxLength: 30, minLength: 1 };
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
  //  Адреса: ${data.city}, ${data.road}${data.house}, квартира: ${data.flat}, підїзд: ${data.entrance}, код: ${data.code}, поверх: ${data.floor}
  //  Коментар: ${data.comm}
  //  Дата та час: ${data.date} ${data.time}
  //  Оплата: ${data.pay}
   `
    );
    dispatch(showAlert());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Контакти:</h2>
      <input
        {...register("tel", { required: true, maxLength: 15, pattern: /([0-9,+])/ })}
        type="tel"
        placeholder="Телефон"
      ></input>
      {errors?.tel?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
      {errors?.tel?.type === "maxLength" && <p className="error">Не може перевищувати 15 символів</p>}
      {errors?.tel?.type === "pattern" && <p className="error">Тільки цифри</p>}
      <h2>Адреса:</h2>
      <li>
        <ul>
          <input {...register("city", inpOptions)} type="text" placeholder="Місто"></input>
          {errors?.city?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.city?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("road", inpOptions)} type="text" placeholder="Вулиця"></input>
          {errors?.road?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.road?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("house", inpOptions)} type="text" placeholder="Будинок"></input>
          {errors?.house?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.house?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("flat", inpOptions)} type="text" placeholder="Квартира"></input>
          {errors?.flat?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.flat?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("entrance", inpOptions)} type="text" placeholder="Підїзд"></input>
          {errors?.entrance?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.entrance?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("code", inpOptions)} type="text" placeholder="Код"></input>
          {errors?.code?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.code?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("floor", inpOptions)} type="text" placeholder="Поверх"></input>
          {errors?.floor?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.floor?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
      </li>
      <textarea {...register("comm")} rows="5" cols="37" placeholder="Коментар"></textarea>
      <h2>Дата та час:</h2>
      <li>
        <ul>
          <input {...register("date", { inpOptions, pattern: /([0-9,,,.,:])/ })} type="text" placeholder="Дата"></input>
          {errors?.date?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.date?.type === "pattern" && <p className="error">Тільки цифри</p>}
          {errors?.date?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
        </ul>
        <ul>
          <input {...register("time", { inpOptions, pattern: /([0-9,,,.,:])/ })} type="text" placeholder="Час"></input>
          {errors?.time?.type === "required" && <p className="error">Це поле є обов'язковим</p>}
          {errors?.time?.type === "maxLength" && <p className="error">Не може перевищувати 30 символів</p>}
          {errors?.time?.type === "pattern" && <p className="error">Тільки цифри</p>}
        </ul>
      </li>
      <h2>Оплата:</h2>
      <select {...register("pay")}>
        <option value="Готівка">Готівка</option>
        <option value="Карткою кур'єру">Карткою кур'єру</option>
      </select>
      <div>
        <p>Усього: {totalPrice}.00 ₴</p>
        <input className="inp_submt" type="submit" value="Замовити" />
      </div>
    </form>
  );
}
