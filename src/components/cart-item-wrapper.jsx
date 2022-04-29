import { onAddItem, onRemoveItem } from "../redux/action/cart";
import CartItem from "./cart-item";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function CartItemsWrapper({ index, obj }) {
  const dispatch = useDispatch();
  const onAddClick = (obj) => {
    dispatch(onAddItem(obj, index));
  };
  const onRemoveClick = (obj) => {
    dispatch(onRemoveItem(obj, index));
  };
  return Object.values(obj).map((e) => {
    return Object.values(e).map((element) => {
      return element.length > 0 ? (
        <CartItem
          key={`${index}${element[0].type}${element[0].size}`}
          obj={element[0]}
          index={index}
          lengthOfarr={element.length}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
        />
      ) : null;
    });
  });
}

CartItemsWrapper.propTypes = {
  obj: PropTypes.object,
  index: PropTypes.string,
};

export default CartItemsWrapper;
