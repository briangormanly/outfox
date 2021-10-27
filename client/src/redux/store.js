import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, authReducer } from './reducers/userReducers';
import { friendsReducer } from './reducers/friendsReducer';
import { groupPageReducer } from './reducers/groupPageReducers';
import { assignmentReducer } from './reducers/assignmentReducers';

// Reducers for application state
const reducers = combineReducers({
	userDetail      : userReducer,
	userAuth        : authReducer,
	friendDetail    : friendsReducer,
	groupPageDetail : groupPageReducer,
	assignment : assignmentReducer,
});

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
// Redux middlewares
const middlewares = [ thunk ];

// Initialize the redux store with a default state.
const initialState = {};

export const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);



