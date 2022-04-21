import { useDispatch, useSelector } from "react-redux";
import { DessertsItem } from "../components";
import { DessertsLoading } from "../components/Loadings";
import { onAddItem, onRemoveItem } from "../redux/action/cart";

function Desserts() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items[2]);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items.desserts);
  const onAddClick = (obj, type) => {
    dispatch(onAddItem(obj, type));
  };
  const onRemoveClick = (obj) => {
    dispatch(onRemoveItem(obj, "desserts"));
  };
  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return (
              <DessertsItem
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
            .map((_, index) => <DessertsLoading key={index} />)}
    </div>
  );
}

export default Desserts;
