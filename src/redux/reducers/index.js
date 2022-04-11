import { combineReducers } from "redux";
import filters from "./filters";
import items from "./items";

const rootReducer = combineReducers({
  filters,
  items,
});

export default rootReducer;
