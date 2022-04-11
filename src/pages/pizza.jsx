import { useSelector } from "react-redux";
import { PizzaItem } from "../components/index";
import { PizzaLoading } from "../components/Loadings";

function Pizza() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  return (
    <div className="pizza_wrapper">
      {isLoaded
        ? items.map((obj) => {
            return <PizzaItem key={obj.id} {...obj} />;
          })
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoading key={index} />)}
    </div>
  );
}

export default Pizza;
