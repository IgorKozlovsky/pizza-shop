import "./scss/App.scss";
import { NavBar, Footer } from "./components";
import { Pizza, Drinks, Desserts, Constructor } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <NavBar />
      </nav>
      <main>
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
