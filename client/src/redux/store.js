import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer, authReducer } from "./reducers/userReducers";
import { friendsReducer } from "./reducers/friendsReducer";
import { groupPageReducer } from "./reducers/groupPageReducers";
import { assignmentReducer } from "./reducers/assignmentReducers";
import { lessonsReducer } from "./reducers/lessonsReducers";

// Reducers for application state
const reducers = combineReducers({
  userDetail: userReducer,
  userAuth: authReducer,
  friendDetail: friendsReducer,
  groupPageDetail: groupPageReducer,
  assignmentPageDetail: assignmentReducer,
  lessonsDetail: lessonsReducer
});

// Redux middlewares
const middlewares = [thunk];

// Initialize the redux store with a default state.
const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
