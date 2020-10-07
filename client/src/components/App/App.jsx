import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyles } from '../../styles/globalStyles';

import { HomePage, SignIn, SignUp, UserPage } from '../../pages';

const App = () => {
	const userDetail = useSelector((state) => state.userDetail);

	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route
					exact
					path="/signin"
					render={() =>
						userDetail.auth ? (
							<Redirect to={`/user/${userDetail.user.id}`} />
						) : (
							<SignIn />
						)}
				/>

				<Route
					exact
					path="/signup"
					render={() =>
						userDetail.auth ? (
							<Redirect to={`/user/${userDetail.user.id}`} />
						) : (
							<SignUp />
						)}
				/>
				<Route exact path="/user/:id" component={UserPage} />
			</Switch>
		</Router>
	);
};

export default App;
