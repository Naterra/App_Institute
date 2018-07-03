import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';

import studying from '../../assets/img/studying_sm.jpg';
import events from '../../assets/img/events_sm.jpg';
import graduates from '../../assets/img/graduates_sm.jpg';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<h3>Добро пожаловать на наш сайт</h3>

				<div className="row">
					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img alt="" src={studying} />
							</div>
							<div className="card-content">
								<span className="card-title">Обучение</span>
								<p>Мы обучаем наших стдентов используя современную литературу и технологии</p>
							</div>
						</div>
					</div>

					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img alt=""  src={events} />
							</div>
							<div className="card-content">
								<span className="card-title">Мероприятия</span>
								<p>
									В нашем институте проходят обучающие мероприятия, где лекторами выступают сотрудники крупнейших IT компаний
									страны{' '}
								</p>
							</div>
						</div>
					</div>

					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img alt="" src={graduates} />
							</div>
							<div className="card-content">
								<span className="card-title">Выпускники</span>
								<p>Наши выпускники - наша гордость! Посмотрите истории наших выпускников и как сложилась их карьера</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
