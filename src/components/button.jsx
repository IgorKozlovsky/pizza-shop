import PropTypes from "prop-types";
import React from "react";

function Button({ onAddItem, addedCount }) {
  return <button onClick={onAddItem}>{addedCount > 0 ? `+ -` : `В кошик`}</button>;
}

Button.propTypes = {
  onAddItem: PropTypes.func,
  addedCount: PropTypes.object,
};

export default Button;
