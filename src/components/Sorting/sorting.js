import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ persons: this.props.persons, value: '' });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.persons !== this.state.persons) {
            this.setState({ persons: nextProps.persons });
        }
    }

    handleSortThing = (e) => {
        const fred = this.state.persons.items;
        
        this.setState({ value: e.target.value });

        if (e.target.value === 'score_ascending') {
            fred.sort((a, b) => {
                return a.score - b.score;
            });
        } else if (e.target.value === 'score_descending') {
            fred.sort((a, b) => {
                return b.score - a.score;
            });
        } else if (e.target.value === 'name_ascending') {
            fred.sort((a, b) => {
                const Aname = a.login.toLowerCase();
                const Bname = b.login.toLowerCase();
                if (Aname < Bname) {
                    return -1;
                }
                if (Aname > Bname) {
                    return 1;
                }
                
                    return 0;
            });
        } else if (e.target.value === 'name_descending') {
            fred.sort((a, b) => {
                const Aname = a.login.toLowerCase();
                const Bname = b.login.toLowerCase();
                if (Aname > Bname) {
                    return -1;
                }
                if (Aname < Bname) {
                    return 1;
                }
                
                    return 0;
            });
        }

        const person_fred = { items: fred };
        this.props.OnChangeHandleSort(person_fred);
        this.setState({ persons: person_fred });
    }

    render() {
        return (
        
            <div>
                 <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="item-2">
            <h3 className="text-center">
Sorting
            </h3>
            <hr />
            <div className="container">

                <div className="row down">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <select value={this.state.value} onChange={this.handleSortThing} placeholder="Select from the items" id="select-man" className="custom-select form-control">
                            <option value="" disabled selected>
Select your option
                            </option>
                            <option value="score_ascending">
Score Ascending
                            </option>
                            <option value="score_descending">
Score Descending
                            </option>
                            <option value="name_ascending">
Name ascending
                            </option>
                            <option value="name_descending">
Name Descending
                            </option>
                        </select>
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
            <hr />
        </div>
                 </ReactCSSTransitionGroup>
            </div>);
    }
}
export default Sorting;
