import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class TopMenu extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<div className="logo left">
						<a href="/" className="">
							<img alt="" src={logo} className="App-logo" />
						</a>
						<div className="logo_title">OnlineUniversity</div>
					</div>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/">Главная</Link>
						</li>
						<li>
							<Link to="/list">Направления факультета</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default TopMenu;
