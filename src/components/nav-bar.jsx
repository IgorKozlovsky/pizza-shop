import classes from "../scss/components/_nav-bar.module.scss";

function NavBar() {
  return (
    <header className={classes.navbar_wrapper}>
      <nav className={classes.navbar_bar}>
        <div className={classes.logo}>
          <a href="#">
            <img src={require("../assets/img/icon.png")} />
            <span>Курсова піца</span>
          </a>
        </div>

        <div className={classes.nav}>
          <button>Піца</button>
          <button>Напої</button>
          <button>Десерти</button>
          <button>Конструктор</button>
        </div>

        <button className={classes.bucket}>
          <div>
            <span>0</span>
            <img src={require("../assets/img/basket.png")} />
          </div>
          <div>
            <span>Замовити</span>
            <span>00.00</span>
          </div>
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
