import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../../styles/globalStyles';

// import HomePage from '../../pages/HomePage/HomePage';
import { HomePage, SignIn, SignUp } from '../../pages';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</Router>
	);
};

export default App;
