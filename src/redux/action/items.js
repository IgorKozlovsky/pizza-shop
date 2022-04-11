import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas =
  ({ type }, order) =>
  (dispatch) => {
    console.log(type);
    dispatch(setLoaded(false));
    axios
      .get(`http://localhost:3001/pizzas?_sort=${type}&_order=${order}`)
      .then(({ data }) => dispatch(setPizza(data)));
  };

export const setPizza = (type) => ({
  type: "SET_PIZZAS",
  payload: type,
});
