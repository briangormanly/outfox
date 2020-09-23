import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../../styles/globalStyles';

import LandingPage from '../../pages/LandingPage/LandingPage';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={LandingPage} />
			</Switch>
		</Router>
	);
};

export default App;
