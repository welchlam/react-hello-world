import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import {logger} from "./middleware/logger";

export default createStore(
    rootReducer,
    compose(applyMiddleware(logger))
);
