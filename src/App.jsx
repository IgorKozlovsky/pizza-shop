import classes from "./scss/App.module.scss";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <div className={classes.wrapper}>
      <NavBar />
    </div>
  );
}

export default App;
