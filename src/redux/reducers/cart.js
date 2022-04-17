const initialState = {
  pizzas: {},
  drinks: {},
  desserts: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          [action.payload.id]: !state.pizzas[action.payload.id]
            ? [action.payload]
            : [...state.pizzas[action.payload.id], action.payload],
        },
      };

    default:
      return state;
  }
};
export default cart;
