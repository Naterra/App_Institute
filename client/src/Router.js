import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './pages/App/App';
import ClassesList from './pages/ClassesListPage/ClassesListPage';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/list" component={ClassesList} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default Router;
