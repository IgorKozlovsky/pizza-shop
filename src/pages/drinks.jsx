import { useDispatch, useSelector } from "react-redux";
import { DrinksItem } from "../components";
import { DrinksLoading } from "../components/Loadings";
import { onAddItem } from "../redux/action/cart";

function Drinks() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items[1]);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items.drinks);
  const onAddClick = (obj, type) => {
    dispatch(onAddItem(obj, type));
  };
  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return (
              <DrinksItem
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}
                onAddClick={onAddClick}
              />
            );
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <DrinksLoading key={index} />)}
    </div>
  );
}

export default Drinks;
