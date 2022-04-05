import classes from "./scss/App.module.scss";
import { NavBar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className={classes.wrapper}>
      <NavBar />
      <main></main>
    </div>
  );
}

export default App;
