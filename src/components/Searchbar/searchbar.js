import React from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
 isName: '', persons: [], error: null, isLoaded: false, views: 'list_view', value: '', followers: [] 
});
    }

    handleChangeofSearch(e) {
        this.setState({ isName: e.target.value });
        axios.get('https://api.github.com/search/users?q=' + e.target.value).then((res) => {
            this.setState({ persons: res.data });
            
            this.props.OnChangeHandleSearch(this.state.persons, this.state.isName);
        }).catch((error) => {
            console.log(error.response);
        });
    }

    handleListThing = (event) => {
        this.setState({ views: event.target.value });
        this.props.onChangeHandleViews(event.target.value);
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
                    <div className="item-2" key="1">

                        <h3 className="text-center" key="2">
Searching
                        </h3>

                        <hr />

                        <div className="container">
                            <div className="row">
                                <div className="col-md-2" />
                                <div className="col-md-8">
                                    <input type="text" className="form-control justify-content-center search-box" value={this.state.isName} placeholder="Search..." onChange={e => this.handleChangeofSearch(e)} />
                                </div>
                                <div className="col-md-2" />
                            </div>
                            <div className="row down">
                                <div className="col-md-2" />
                                <div className="col-md-8">
                                    <select value={this.state.views} onChange={this.handleListThing} id="select-man" className="custom-select form-control">
                                        <option value="" disabled selected>
Option for Views
                                        </option>
                                        <option value="list_view">
List View
                                        </option>
                                        <option value="Grid_view">
Grid View
                                        </option>

                                    </select>
                                </div>
                                <div className="col-md-2" />
                            </div>
                        </div>
                        <hr />


                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default Searchbar; 
