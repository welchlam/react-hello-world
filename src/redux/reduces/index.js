import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import features from "./feature/reducer";

export default combineReducers({ todos, visibilityFilter, features });
