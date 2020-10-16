import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyles } from '../../styles/globalStyles';

import { HomePage, SignIn, SignUp, UserPage, GroupPage } from '../../pages';

// Testing
import TestPage from '../../pages/TestPage/TestPage';

const App = () => {
	const { auth, userID } = useSelector((state) => state.userAuth);

	return (
		<Router>
			<GlobalStyles />
			<Switch>
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
				<Route exact path="/user/:id" component={UserPage} />
				<Route exact path={`/user/:userID/groups/:groupID`} component={GroupPage} />
				<Route exact path="/test">
					<TestPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
