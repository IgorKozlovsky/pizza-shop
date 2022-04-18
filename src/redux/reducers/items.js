const initialState = {
  items: [],
  isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.type]: (state.items[action.payload.type] = action.payload.items),
        },
        isLoaded: true,
      };
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
