import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../../styles/globalStyles';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<div>Hello World</div>
		</Router>
	);
};

export default App;
