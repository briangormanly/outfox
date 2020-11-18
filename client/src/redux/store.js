import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer, authReducer } from './reducers/userReducers';
import { friendsReducer } from './reducers/friendsReducer';

// Reducers for application state
const reducers = combineReducers({
	userDetail   : userReducer,
	userAuth     : authReducer,
	friendDetail : friendsReducer
});

// Redux middlewares
const middlewares = [ thunk ];

// Initialize the redux store with a default state.
const initialState = {};

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
