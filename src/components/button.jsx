import React from "react";

function Button({ addItemToBucket }) {
  return <button onClick={addItemToBucket}>+ Додати</button>;
}

export default Button;
