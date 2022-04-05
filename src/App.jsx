import classes from "./scss/App.module.scss";
import { NavBar } from "./components";
import { Pizza, Drinks, Desserts, Constructor } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={classes.wrapper}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Pizza />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/constructor" element={<Constructor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
