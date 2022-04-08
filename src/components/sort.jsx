import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Sort({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [activeTriangle, setActiveTriangle] = useState(false);
  const sortRef = useRef();
  const activeLable = items[activeItem].name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const toggleActiveTriangle = () => {
    setActiveTriangle(!activeTriangle);
  };
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  const closePopup = (e) => {
    let path = e.path;
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", closePopup);
  }, []);

  const url = useLocation().pathname;
  const onUrlChange = () => {
    switch (url) {
      case "/":
        return "Меню піци: ";

      case "/drinks":
        return "Меню напоїв: ";

      case "/desserts":
        return "Меню десертів: ";

      default:
        return "Меню піци: ";
    }
  };
  const label = onUrlChange();
  return (
    <section className="sort">
      <h2>{label}</h2>
      <div className="sort_label">
        <img
          onClick={toggleActiveTriangle}
          className={activeTriangle ? "rotate" : ""}
        ></img>
        <article>
          <label>Сортування за: </label>
          <span
            onClick={toggleVisiblePopup}
            ref={sortRef}
            className="sort_name"
          >
            {activeLable}
          </span>
          {visiblePopup && (
            <menu className="sort_popup">
              <ul>
                {items &&
                  items.map((obj, index) => (
                    <li
                      className={activeItem === index ? "active" : ""}
                      onClick={() => {
                        onSelectItem(index);
                      }}
                      key={`${obj.type}_${index}`}
                    >
                      {obj.name}
                    </li>
                  ))}
              </ul>
            </menu>
          )}
        </article>
      </div>
    </section>
  );
}

export default Sort;
