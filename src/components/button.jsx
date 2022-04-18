import React from "react";

function Button({ onAddItem, addedCount }) {
  return <button onClick={onAddItem}>{addedCount > 0 ? `+ -` : `В кошик`}</button>;
}

export default Button;
