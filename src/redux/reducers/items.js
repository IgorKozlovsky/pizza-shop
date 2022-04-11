const initialState = {
  itemsPizza: [],
  itemsDrinks: [],
  isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return { ...state, itemsPizza: action.payload, isLoaded: true };
    case "SET_DRINKS":
      return { ...state, itemsDrinks: action.payload, isLoaded: true };
    case "SET_LOADED":
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};
export default items;
