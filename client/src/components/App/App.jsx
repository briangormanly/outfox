import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyles } from '../../styles/globalStyles';

import { HomePage, SignIn, SignUp, UserPage } from '../../pages';

// Testing
import TestPage from '../../pages/TestPage/TestPage';

const App = () => {
	const { auth, userID } = useSelector((state) => state.userAuth);

	return (
		<Router>
			<GlobalStyles />
			<div>
				<Route exact path="/" component={HomePage} />
				<Route
					exact
					path="/signin"
					render={() => (auth ? <Redirect to={`/user/${userID}`} /> : <SignIn />)}
				/>

				<Route
					exact
					path="/signup"
					render={() => (auth ? <Redirect to={`/user/${userID}`} /> : <SignUp />)}
				/>
				<Route path="/user/:id" component={UserPage} />
				<Route exact path="/test">
					<TestPage />
				</Route>
			</div>
		</Router>
	);
};

export default App;
