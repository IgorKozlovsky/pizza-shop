import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

function Sort({ items, sortBy, onClickSetSort, order, onClickOrder }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const activeLable = items.find((obj) => obj.type === sortBy.type).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const toggleActiveTriangle = () => {
    switch (order) {
      case "asc":
        onClickOrder("desc");
        break;

      default:
        onClickOrder("asc");
        break;
    }
  };
  const onSelectItem = (obj) => {
    onClickSetSort(obj.type);
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
  let hideSort = false;
  const url = useLocation().pathname;
  const onUrlChange = () => {
    switch (url) {
      case "/":
        hideSort = false;
        return "Меню піци: ";

      case "/drinks":
        hideSort = false;
        return "Меню напоїв: ";

      case "/desserts":
        hideSort = false;
        return "Меню десертів: ";

      case "/constuctor":
        hideSort = true;
        return "Конструктор: ";

      default:
        return "Меню піци: ";
    }
  };

  const label = onUrlChange();
  return (
    <section className="sort">
      <h2>{label}</h2>
      <div
        className={classNames(
          {
            hide: hideSort,
          },
          "sort_label"
        )}
      >
        <img
          onClick={toggleActiveTriangle}
          className={order === "asc" ? "" : "rotate"}
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
                      onClick={() => onSelectItem(obj)}
                      className={sortBy.type === obj.type ? "active" : ""}
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
