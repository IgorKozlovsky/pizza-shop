import React from "react";
import ContentLoader from "react-content-loader";

function DessertsLoading() {
  return (
    <ContentLoader
      speed={2}
      width={409}
      height={385}
      viewBox="0 0 409 385"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza_item"
    >
      <rect x="59" y="230" rx="10" ry="10" width="259" height="30" />
      <rect x="22" y="323" rx="10" ry="10" width="55" height="32" />
      <rect x="222" y="302" rx="38" ry="38" width="149" height="60" />
      <rect x="174" y="271" rx="10" ry="10" width="32" height="21" />
      <rect x="75" y="22" rx="10" ry="10" width="220" height="200" />
    </ContentLoader>
  );
}

export default DessertsLoading;
