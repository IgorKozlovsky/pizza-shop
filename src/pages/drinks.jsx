import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrinksItem } from "../components";
import { DrinksLoading } from "../components/Loadings";
import { fetchDrinks } from "../redux/action/items";

function Drinks({ sortBy, order }) {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.itemsDrinks);
  const isLoaded = useSelector(({ items }) => items.isLoaded);

  useEffect(() => {
    dispatch(fetchDrinks(sortBy, order));
  }, [sortBy, order]);
  const onAddClick = (obj) => {
    dispatch({
      type: "ADD_DRINK",
      payload: obj,
    });
  };
  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return <DrinksItem key={obj.id} {...obj} onAddClick={onAddClick} />;
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <DrinksLoading key={index} />)}
    </div>
  );
}

export default Drinks;
