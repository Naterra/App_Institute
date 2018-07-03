import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './Router';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
	<div className="App">
		<Router />
	</div>,
	document.getElementById('root')
);
