import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../../styles/globalStyles';

import HomePage from '../../pages/HomePage/HomePage';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</Router>
	);
};

export default App;
