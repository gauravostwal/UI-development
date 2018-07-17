import React from 'react';
import Grid from '../Gridview/gridview';
import Listview from '../Listview/listview';

class Userviewcomponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
 personsinfo: this.props.personalinfo, CurrentPersonInfo: this.props.CurrentPersonInfo, index: null, open: false, views: this.props.views 
};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.CurrentPersonInfo !== this.state.CurrentPersonInfo) {
			this.setState({ CurrentPersonInfo: nextProps.CurrentPersonInfo });
		}
	}

	render() {
		return (<div>
			{this.props.views === 'Grid_view' ? <Grid CurrentPersonInfo={this.state.CurrentPersonInfo} />
				: <Listview CurrentPersonInfo={this.state.CurrentPersonInfo} />}
          </div>
		);
	}
}
export default Userviewcomponent;
