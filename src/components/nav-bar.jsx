import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

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
            Піца
          </Link>
          <Link to="/drinks">Напої</Link>
          <Link to="/desserts">Десерти</Link>
        </nav>
        <Link to="/cart">
          <button className="bucket">
            <figure>
              <figcaption>{totalCount}</figcaption>
              <img src={require("../assets/img/basket.png")} />
            </figure>
            <article>
              <h2>Замовити</h2>
              <p>{totalPrice}.00 ₴</p>
            </article>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
