import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchItems =
  ({ type }, order) =>
  (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?_sort=${type}&_order=${order}`).then(({ data }) => dispatch(setItems(data, 0)));
    axios.get(`http://localhost:3001/drinks?_sort=${type}&_order=${order}`).then(({ data }) => dispatch(setItems(data, 1)));
    axios.get(`http://localhost:3001/desserts?_sort=${type}&_order=${order}`).then(({ data }) => dispatch(setItems(data, 2)));
  };

export const setItems = (items, type) => ({
  type: "SET_ITEMS",
  payload: { items, type },
});

export const setNewPrice = (price, id) => ({
  type: "SET_NEW_PRICE",
  payload: { price, id },
});
