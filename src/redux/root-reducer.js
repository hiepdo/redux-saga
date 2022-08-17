import { combineReducers } from "redux";
import contactReducers from "./reducer";

const rootReducer = combineReducers({
  data: contactReducers,
});

export default rootReducer;
