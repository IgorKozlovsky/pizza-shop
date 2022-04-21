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
  Object.values(obj).forEach((element) => {
    Object.values(element).forEach((e) => {
      Object.values(e).forEach((el) => {
        mass = mass.concat(el);
      });
    });
  });
  return mass;
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { obj, type } = action.payload;
      const nameNewItem = type === "pizza" ? `${obj.type} ${obj.size}` : `${obj.type}`;

      const currentItems = {
        ...state.items,
        [type]: {
          ...state.items[type],
          [obj.id]: {
            ...state.items[type][obj.id],
            [nameNewItem]:
              !state.items[type][obj.id] || !state.items[type][obj.id][nameNewItem]
                ? [obj]
                : [...state.items[type][obj.id][nameNewItem], obj],
          },
        },
      };
      const allItems = connectionMassives(currentItems);
      const totalCount = allItems.length;
      const totalPrice = allItems.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);

      return { ...state, items: currentItems, totalPrice, totalCount };

    default:
      return state;
  }
};
export default cart;
