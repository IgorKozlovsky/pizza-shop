import React from "react";
import ContentLoader from "react-content-loader";

function DrinksLoading() {
  return (
    <ContentLoader
      speed={2}
      width={409}
      height={485}
      viewBox="0 0 409 485"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza_item"
    >
      <rect x="129" y="336" rx="10" ry="10" width="150" height="30" />
      <rect x="35" y="439" rx="10" ry="10" width="55" height="32" />
      <rect x="236" y="421" rx="38" ry="38" width="149" height="60" />
      <rect x="192" y="375" rx="10" ry="10" width="32" height="21" />
      <rect x="151" y="15" rx="10" ry="10" width="95" height="315" />
    </ContentLoader>
  );
}

export default DrinksLoading;
