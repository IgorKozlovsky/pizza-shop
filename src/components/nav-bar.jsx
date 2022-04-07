import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar_wrapper">
      <div className="navbar_bar">
        <Link to="/">
          <figure className="logo">
            <img src={require("../assets/img/icon.png")} />
            <figcaption>CoursePizza</figcaption>
          </figure>
        </Link>
        <nav className="nav">
          <Link className="nav_active" to="/">
            Pizza
          </Link>
          <Link to="/drinks">Напої</Link>
          <Link to="/desserts">Десерти</Link>
          <Link to="/constuctor">Конструктор</Link>
        </nav>
        <Link to="/bucket">
          <button className="bucket">
            <figure>
              <figcaption>0</figcaption>
              <img src={require("../assets/img/basket.png")} />
            </figure>
            <article>
              <h2>Замовити</h2>
              <p>00.00</p>
            </article>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
