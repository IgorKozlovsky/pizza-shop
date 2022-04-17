const initialState = {
  itemsPizza: [],
  itemsDrinks: [],
  itemsDesserts: [],
  isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return { ...state, itemsPizza: action.payload, isLoaded: true };
    case "SET_DRINKS":
      return { ...state, itemsDrinks: action.payload, isLoaded: true };
    case "SET_DESSERTS":
      return { ...state, itemsDesserts: action.payload, isLoaded: true };
    case "SET_LOADED":
      return { ...state, isLoaded: action.payload };
    case "SET_NEW_PRICE":
      return {
        ...state,
        itemsPizza: {
          [action.payload.id]: (state.itemsPizza[action.payload.id].price = action.payload.newprice),
        },
      };
    default:
      return state;
  }
};
export default items;
