import React from 'react';
import axios from 'axios';

class Follower extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ id: this.props.match.params.id, person_info: [], followers: [] });
    }

    componentWillMount() {
        axios.get('https://api.github.com/users/' + this.state.id).then((res) => {
            this.setState({ person_info: res.data });
            console.log(this.state.person_info);
            axios.get('https://api.github.com/users/' + this.state.id + '/followers').then((info) => {
                this.setState({ followers: info.data });
                console.log(this.state.followers);
            });
        });
    }

    render() {
        const followers_data = this.state.followers;
        return (
<div className="container">
            <div className="row">
                
                <div className="col-md-8">
                    {followers_data.map((follow, index) => (
                        <div className="item-5">
                            <img className="image-attack" src={follow.avatar_url} alt="Circle image" />
                            <h3 className="text-center">
{follow.login}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="col-md-4" />
            </div>

</div>
);
    }
}
export default Follower;
