import { useState } from "react";
import Cacaca from "./cacaca";

function CartItem({ index, obj }) {
  const [lengthOfItem, setLengthOfItem] = useState(0);

  return Object.values(obj).map((e) => {
    console.log(e);
    for (let prop in e) {
      return <Cacaca obj={e[prop]} index={index} />;
    }
  });
}

export default CartItem;
