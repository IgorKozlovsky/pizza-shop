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
  let totalCount, totalPrice;
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
      totalCount = allItems.length;
      totalPrice = allItems.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);

      return { ...state, items: currentItems, totalPrice, totalCount };
    case "REMOVE_ITEM":
      const nameNewItemRe =
        action.payload.type === "pizza"
          ? `${action.payload.obj.type} ${action.payload.obj.size}`
          : `${action.payload.obj.type}`;
      const currentItemsRe = {
        ...state.items,
        [action.payload.type]: {
          ...state.items[action.payload.type],
          [action.payload.obj.id]: {
            ...state.items[action.payload.type][action.payload.obj.id],
            [nameNewItemRe]: [...state.items[action.payload.type][action.payload.obj.id][nameNewItemRe].slice(1)],
          },
        },
      };
      const allItemsRe = connectionMassives(currentItemsRe);
      totalCount = allItemsRe.length;
      totalPrice = allItemsRe.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
      return {
        ...state,
        items: currentItemsRe,
        totalPrice,
        totalCount,
      };
    default:
      return state;
  }
};
export default cart;
