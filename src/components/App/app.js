import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userviewcomponent from '../Userviewcomponent/userviewcomponent';
import Loader from '../Loader/loader';
import Searchbar from '../Searchbar/searchbar';
import Filter from '../Filter/filter';
import Sorting from '../Sorting/sorting';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
 isName: '', CurrentPersonInfo: [], persons: [], dummy: [], error: null, isLoaded: false, value: '', followers: [], views: 'list_view', current_page: 1, todos_perpage: 5 
};
		this.handleChangeofSearch = this.handleChangeofSearch.bind(this);
	}

	handleChangeofSearch = (persons_data, persons_name) => {
		this.setState({
 dummy: persons_data, persons: persons_data, isName: persons_name, isLoaded: true 
});
	}

	handleRadioAll = (sorted_data) => {
		const person_fred = { items: sorted_data };
		console.log(person_fred);
		this.setState({ persons: person_fred });
	}

	handleListThing = (views) => {
		this.setState({ views });
		console.log(this.state.views);
	}

	handleNextPage = (event, CurrentPersonInfo) => {
		this.setState({ current_page: Number(event.target.id) });
	}

	handleSortThing = (fred) => {
		this.setState({ persons: fred });
	}

	render() {
		const { error, isLoaded } = this.state;
		const { current_page, todos_perpage } = this.state;
		const personsinfo = this.state.persons.items;
		const IndexOfLastTodo = current_page * todos_perpage;
		const IndexofFirsTodo = IndexOfLastTodo - todos_perpage;
		let CurrentPersonInfo = personsinfo;
		let PageNumberArray;
		{ personsinfo !== undefined ? PageNumberArray = personsinfo : PageNumberArray = []; }

		{ CurrentPersonInfo !== undefined ? CurrentPersonInfo = CurrentPersonInfo.slice(IndexofFirsTodo, IndexOfLastTodo) : CurrentPersonInfo = []; }
		const pageNumbers = [];

		for (let i = 1; i <= Math.ceil(Object.keys(PageNumberArray).length / todos_perpage); i++) {
			pageNumbers.push(i);
		}
		
		const renderpages = pageNumbers.map((number, index) => {
			return (

				<li className="page-item page-link" key={number} id={number} onClick={CurrentPersonInfo => this.handleNextPage(CurrentPersonInfo)}>
					{number}
				</li>

			);
		});

		if (error) {
			return (
<div>
Error:
{error.message}
</div>
);
		} 
			return (
				<div>
					<div className="container">
						<div className="row">

							<div className="col-md-4">

								<Searchbar OnChangeHandleSearch={this.handleChangeofSearch} onChangeHandleViews={this.handleListThing} />
								<Filter OnChangeHandleRadio={this.handleRadioAll} persons={this.state.persons} dummy={this.state.dummy} />
								<Sorting OnChangeHandleSort={this.handleSortThing} persons={this.state.persons} />
								<nav className="down">
									<ul className="pagination justify-content-center">
										{renderpages}
									</ul>
								</nav>
							</div>
							<div className="col-md-8">

								{this.state.persons !== undefined && isLoaded === true ? <Userviewcomponent CurrentPersonInfo={CurrentPersonInfo} views={this.state.views} personalinfo={this.state.persons.items} /> : <Loader /> }

							</div>
						</div>

					</div>

				</div>
			);
	}
}
export default App; 
