const initialState = {
  items: {
    pizza: {},
    drinks: {},
    desserts: {},
  },
  totalPrice: 0,
  totalCount: 0,
};

function connectionMassives(obj) {
  let mass = [];
  for (let prop in obj) {
    mass = mass.concat.apply(mass, Object.values(obj[prop]).concat.apply([], Object.values(obj[prop])));
  }
  return mass;
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const currentItems = {
        ...state.items,
        [action.payload.type]: {
          ...state.items[action.payload.type],
          [action.payload.obj.id]: !state.items[action.payload.type][action.payload.obj.id]
            ? [action.payload.obj]
            : [...state.items[action.payload.type][action.payload.obj.id], action.payload.obj],
        },
      };

      const allItems = connectionMassives(currentItems);
      const totalCount = allItems.length;
      const totalPrice = allItems.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);

      return {
        ...state,
        items: currentItems,
        totalPrice,
        totalCount,
      };

    default:
      return state;
  }
};
export default cart;
