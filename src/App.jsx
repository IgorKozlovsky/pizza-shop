import "./scss/App.scss";
import { NavBar, Footer, Sort } from "./components";
import { Pizza, Drinks, Desserts, Constructor, Cart } from "./pages";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { setSortBy, setOrder } from "./redux/action/filters";
import { fetchItems } from "./redux/action/items";
import { hideAlert } from "./redux/action/cart";

const sortIems = [
  { name: "ціною", type: "price" },
  { name: "алфавітом", type: "name" },
];

const topLabelItem = ["Меню піци: ", "Меню напоїв: ", "Меню десертів: "];

function App() {
  const dispatch = useDispatch();

  const { sortBy, order } = useSelector(({ filters }) => filters);
  const { display } = useSelector(({ cart }) => cart);
  const onSetSortBy = useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);
  const onSetOrder = useCallback((index) => {
    dispatch(setOrder(index));
  }, []);

  useEffect(() => {
    dispatch(fetchItems(sortBy, order));
  }, [sortBy, order]);
  const onAlertHide = () => {
    dispatch(hideAlert());
  };
  return (
    <>
      {display && (
        <div className="wrapper_alert">
          <div className="block_alert">
            <div className="alert">
              <h2>Дякуємо за замовлення!</h2>
              <p>
                Ваше замовлення було прийнято.
                <br />
                Чекайте на кур'єра
              </p>
              <Link to="/">
                <button className="inp_ok" onClick={onAlertHide}>
                  Oк
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="wrapper" style={{ filter: `blur(${display ? 5 : 0}px)` }}>
        <nav className="nav">
          <NavBar />
        </nav>
        <main>
          <div className="main_top">
            <Sort
              items={sortIems}
              sortBy={sortBy}
              labelItems={topLabelItem}
              onClickSetSort={onSetSortBy}
              order={order}
              onClickOrder={onSetOrder}
            />
          </div>
          <div className="main_wrapper">
            <Routes>
              <Route path="/" element={<Pizza />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
