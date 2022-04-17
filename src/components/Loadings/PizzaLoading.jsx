import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoading() {
  return (
    <ContentLoader
      speed={2}
      width={438}
      height={657}
      viewBox="0 0 438 657"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza_item"
    >
      <circle cx="214" cy="159" r="150" />
      <rect x="60" y="320" rx="10" ry="10" width="300" height="30" />
      <rect x="12" y="360" rx="10" ry="10" width="410" height="75" />
      <rect x="31" y="444" rx="10" ry="10" width="370" height="121" />
      <rect x="57" y="596" rx="10" ry="10" width="55" height="32" />
      <rect x="242" y="584" rx="38" ry="38" width="149" height="60" />
    </ContentLoader>
  );
}

export default PizzaLoading;
