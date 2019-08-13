import todo from "./todo/reducer";
import visibilityFilter from "./filter/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo,
  visibilityFilter
});

export default rootReducer;