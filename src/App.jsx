import "./scss/App.scss";
import { NavBar, Footer, Sort } from "./components";
import { Pizza, Drinks, Desserts, Constructor } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { setSortBy, setOrder } from "./redux/action/filters";

const sortIems = [
  { name: "ціною", type: "price" },
  { name: "алфавітом", type: "name" },
];

const topLabelItem = ["Меню піци: ", "Меню напоїв: ", "Меню десертів: "];

function App() {
  const dispatch = useDispatch();

  const { sortBy, order } = useSelector(({ filters }) => filters);

  const onSetSortBy = useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);
  const onSetOrder = useCallback((index) => {
    dispatch(setOrder(index));
  }, []);

  return (
    <div className="wrapper">
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
            <Route path="/" element={<Pizza sortBy={sortBy} order={order} />} />
            <Route
              path="/drinks"
              element={<Drinks sortBy={sortBy} order={order} />}
            />
            <Route
              path="/desserts"
              element={<Desserts sortBy={sortBy} order={order} />}
            />
            <Route path="/constructor" element={<Constructor />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
