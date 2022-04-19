export const onAddItem = (obj, type) => ({
  type: "ADD_ITEM",
  payload: { obj, type },
});
export const onRemoveItem = (obj, type) => ({
  type: "REMOVE_ITEM",
  payload: { obj, type },
});
