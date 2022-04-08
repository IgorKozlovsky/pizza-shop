import "./scss/App.scss";
import { NavBar, Footer, Sort } from "./components";
import { Pizza, Drinks, Desserts, Constructor } from "./pages";
import { Route, Routes, useParams } from "react-router-dom";

const sortIems = [
  { name: "ціною", type: "price" },
  { name: "алфавітом", type: "name" },
];
const topLabelItem = ["Меню піци: ", "Меню напоїв: ", "Меню десертів: "];

function App() {
  return (
    <div className="wrapper">
      <nav>
        <NavBar />
      </nav>
      <main>
        <div className="main_top">
          <Sort items={sortIems} labelItems={topLabelItem} />
        </div>
        <Routes>
          <Route path="/" element={<Pizza />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/constructor" element={<Constructor />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
