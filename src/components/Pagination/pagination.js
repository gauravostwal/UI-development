import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ persons: this.props.persons, current_page: 1, todos_perpage: 5 });
    }

    componentWillReceiveProps(nextProps) {
		if (nextProps.persons !== this.state.persons) {
			this.setState({ persons: nextProps.persons });
		}
	}

    handleNextPage = (event, CurrentPersonInfo) => {
        this.setState({ current_page: Number(event.target.id) });
        
        this.props.OnHandlePagination(CurrentPersonInfo);
    }

    render() {
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
        console.log(CurrentPersonInfo);
        
        const renderpages = pageNumbers.map((number, index) => {
            return (

                <li className="page-item page-link" key={number} id={number} onClick={CurrentPersonInfo => this.handleNextPage(CurrentPersonInfo)}>
                    {number}
                </li>

            );
        });
        return (
            <div>
            
        <nav className="down">
            <ul className="pagination justify-content-center">
                {renderpages}
            </ul>
        </nav>
            </div>);
    }
}
export default Pagination;
