import "./scss/App.scss";
import axios from "axios";
import { NavBar, Footer, Sort } from "./components";
import { Pizza, Drinks, Desserts, Constructor } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { setPizza } from "./redux/action/items";

const sortIems = [
  { name: "ціною", type: "price" },
  { name: "алфавітом", type: "name" },
];
const topLabelItem = ["Меню піци: ", "Меню напоїв: ", "Меню десертів: "];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => dispatch(setPizza(data)));
  }, []);

  return (
    <div className="wrapper">
      <nav className="nav">
        <NavBar />
      </nav>
      <main>
        <div className="main_top">
          <Sort items={sortIems} labelItems={topLabelItem} />
        </div>
        <div className="main_wrapper">
          <Routes>
            <Route path="/" element={<Pizza />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/desserts" element={<Desserts />} />
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
