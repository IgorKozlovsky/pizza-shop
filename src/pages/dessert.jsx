import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DessertsItem } from "../components";
import { PizzaLoading } from "../components/Loadings";
import { fetchDesserts } from "../redux/action/items";

function Desserts({ sortBy, order }) {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.itemsDesserts);
  const isLoaded = useSelector(({ items }) => items.isLoaded);

  useEffect(() => {
    dispatch(fetchDesserts(sortBy, order));
  }, [sortBy, order]);

  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return <DessertsItem key={obj.id} {...obj} />;
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoading key={index} />)}
    </div>
  );
}

export default Desserts;
