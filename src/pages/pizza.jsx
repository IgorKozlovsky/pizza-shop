import { useDispatch, useSelector } from "react-redux";
import { PizzaItem } from "../components/index";
import { PizzaLoading } from "../components/Loadings";
import { onAddItem, onRemoveItem } from "../redux/action/cart";

function Pizza() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items[0]);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items.pizza);

  const onAddClick = (obj, type) => {
    dispatch(onAddItem(obj, type));
  };
  const onRemoveClick = (obj) => {
    dispatch(onRemoveItem(obj, "pizza"));
  };

  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return (
              <PizzaItem
                key={obj.id}
                addedCount={cartItems[obj.id]}
                {...obj}
                onAddClick={onAddClick}
                onRemoveClick={onRemoveClick}
              />
            );
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoading key={index} />)}
    </div>
  );
}

export default Pizza;
