const initialState = {
  sortBy: { type: "price" },
  order: "asc",
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: { type: action.payload } };
    case "SET_ORDER":
      return { ...state, order: action.payload };

    default:
      return state;
  }
};
export default filters;
