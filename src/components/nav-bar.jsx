import classes from "../scss/components/_nav-bar.module.scss";

function NavBar() {
  return (
    <header className={classes.navbar_wrapper}>
      <div className={classes.navbar_bar}>
        <figure className={classes.logo}>
          <a href="#">
            <img src={require("../assets/img/icon.png")} />
            <figcaption>Курсова піца</figcaption>
          </a>
        </figure>

        <nav className={classes.nav}>
          <button>Піца</button>
          <button>Напої</button>
          <button>Десерти</button>
          <button>Конструктор</button>
        </nav>

        <button className={classes.bucket}>
          <figure>
            <figcaption>0</figcaption>
            <img src={require("../assets/img/basket.png")} />
          </figure>
          <article>
            <h2>Замовити</h2>
            <p>00.00</p>
          </article>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
