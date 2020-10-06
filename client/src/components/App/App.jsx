import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../../styles/globalStyles';

import { HomePage, SignIn, SignUp, UserPage } from '../../pages';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/user/:id" component={UserPage} />
			</Switch>
		</Router>
	);
};

export default App;
