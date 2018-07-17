import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Listview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 CurrentPersonInfo: this.props.CurrentPersonInfo, index: null, open: false, count: 1 
};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.CurrentPersonInfo !== this.state.CurrentPersonInfo) {
            this.setState({ CurrentPersonInfo: nextProps.CurrentPersonInfo });
        }
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
               
                <table className="table item-3 table-striped ">
                    <thead className="heading">    
                        <tr>
                            <th>
Sr.No
                            </th>
                            <th>
Name
                            </th>
                            <th>
Profile Url
                            </th>
                            <th>
Profile Type
                            </th>
                            <th>
Score
                            </th>

                        </tr>
                    </thead>
                    {this.state.CurrentPersonInfo !== undefined ? this.state.CurrentPersonInfo.map((person, index) => (
                        <tbody>
                            <tr>
                                <td>
{++index}
                                </td>
                                <td>
<Link to={'/users/' + person.login}>
{person.login}
</Link>
                                </td>
                                <td>
{person.url}
                                </td>
                                <td>
{person.type}
                                </td>
                                <td>
{person.score}
                                </td>
                            </tr>

                        </tbody>
                    )) : <h6 />
                    }
                </table>
               
                 </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default Listview;
