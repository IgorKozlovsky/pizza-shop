import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PizzaItem } from "../components/index";
import { PizzaLoading } from "../components/Loadings";
import { fetchPizzas } from "../redux/action/items";

function Pizza({ sortBy, order }) {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.itemsPizza);
  const isLoaded = useSelector(({ items }) => items.isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, order));
  }, [sortBy, order]);

  const onAddClick = (obj) => {
    dispatch({
      type: "ADD_PIZZA",
      payload: obj,
    });
  };
  const onChangePrice = (price, id) => {};
  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return <PizzaItem key={obj.id} {...obj} onAddClick={onAddClick} />;
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoading key={index} />)}
    </div>
  );
}

export default Pizza;
