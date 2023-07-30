import { combineReducers } from "redux";

import list from "./list/reducer";
import details from "./details/reducer";

export default combineReducers({
  list,
  details,
});
