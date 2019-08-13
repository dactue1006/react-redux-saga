import todo from "./todo/reducer";
import visibilityFilter from "./filter/reducer";
import demo from "./demo/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo,
  visibilityFilter,
  demo
});

export default rootReducer;