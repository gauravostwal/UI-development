import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ persons: this.props.persons, dummy: this.props.dummy });
    }

    componentWillReceiveProps(nextProps) {
		if (nextProps.persons !== this.state.persons) {
			this.setState({ persons: nextProps.persons });
        }
        if (nextProps.dummy !== this.state.dummy) {
            this.setState({ dummy: nextProps.dummy });
        }
	}

    handleRadioAll = (event) => {
        const fred = this.state.persons.items;
        let sorted_data;
        if (event.target.value === 'score_50') {
            sorted_data = fred.filter((number) => {
                return number.score < 55;
            });
        } else if (event.target.value === 'score_50_100') {
            sorted_data = fred.filter((number) => {
                if (number.score > 50 && number.score < 100) {
                    return number.score;
                }
            });
        } else if (event.target.value === 'score_100') {
            sorted_data = fred.filter((number) => {
                return number.score > 100;
            });
        } else if (event.target.value === 'All') {
            sorted_data = this.state.dummy.items;
        }
        const person_fred = { items: sorted_data };
        this.setState({ persons: person_fred });
        this.props.OnChangeHandleRadio(sorted_data);
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
Filter
                </h3>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-8">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="form-check-input" name="optradio" value="All" onChange={e => this.handleRadioAll(e)} />
                                <label className="custom-control-label">
All Information
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1" />
                    </div>
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-8">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="form-check-input" name="optradio" value="score_50" onChange={e => this.handleRadioAll(e)} />
                                <label className="custom-control-label">
Score less than 55
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1" />
                    </div>

                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-8">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="form-check-input" name="optradio" value="score_50_100" onChange={e => this.handleRadioAll(e)} />
                                <label className="custom-control-label">
Score between 50-100
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1" />
                    </div>

                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-9">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="form-check-input" name="optradio" value="score_100" onChange={e => this.handleRadioAll(e)} />
                                <label className="custom-control-label">
Score greater than 100
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                
            </div>
                 </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default Filter;
