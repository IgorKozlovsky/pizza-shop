import { useSelector } from "react-redux";
import { PizzaItem } from "../components/index";

function Pizza() {
  const { items } = useSelector(({ pizzas }) => {
    return { items: pizzas.items };
  });
  return (
    <div className="pizza_wrapper">
      {items &&
        items.map((obj) => {
          return <PizzaItem key={obj.id} {...obj} />;
        })}
    </div>
  );
}

export default Pizza;
