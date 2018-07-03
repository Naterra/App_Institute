import React, { Component } from 'react';
import Header from '../../components/Header';
import axios from 'axios';

class ClassesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			loading: true,
            error:false
		};
	}

	load_data(){
        axios
            .get(`/api/get_classes`)
            .then(response => {
                console.log(response);

                setTimeout(() => {
                    this.setState({ data: response.data, loading: false, error: false  });
                }, 800);
            })
            .catch((error) => {
                console.log('error', error);
                this.setState({ error: true });
            });
    }

	componentWillMount() {
	    console.log('componentWillMount');
        this.load_data();
	}

    componentDidUpdate(prevProps, prevState) {
	    if(this.state.error){
            this.load_data();
            console.error('Reloading data....');
        }
    }
	render_items() {
		// if data is loading
		if (this.state.loading) {
			return (
				<div className="progress_block">
					<h5>Loading......</h5>
					<div className="progress">
						<div className="indeterminate" />
					</div>
				</div>
			);
		} else if (!this.state.loading && this.state.data === null) {
			// if loading is finished but no data
			return (
				<table className="f_result">
					<tbody>
						<tr>
							<td className="center" colSpan="8">
								No records to show
							</td>
						</tr>
					</tbody>
				</table>
			);
		} else {
			// render items
			return (
				<table className="f_result striped highlight responsive-table">
                    <thead>
                    <tr>
                        <th>Факультет</th>
                        <th>Направление</th>
                        <th>Форма обучения</th>
                        <th>Время обучения</th>
                    </tr>
                    </thead>
					<tbody>
						{this.state.data.map(item => {
							return (
								<tr key={item._id}>
									<td>{item.fakultet}</td>
									<td>{item.napravlenie}</td>
									<td>{item.type_of_education}</td>
									<td>{item.time_period}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			);
		}
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container">{this.render_items()}</div>
			</div>
		);
	}
}

export default ClassesList;
