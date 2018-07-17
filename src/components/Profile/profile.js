import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ persons: [], id: this.props.match.params.id, repo: [] });
    }

    componentWillMount() {
        let arr_info = [];
        axios.get('https://api.github.com/users/' + this.state.id).then((res) => {
            this.setState({ persons: res.data });
            axios.get('https://api.github.com/users/' + this.state.id + '/repos').then((follow) => {
                arr_info = follow.data.map((info) => {
                    const user = info.full_name;
                    return user.replace(this.state.id + '/', '');
                });

                this.setState({ repo: arr_info });
            });
        });
    }

    render() {
        const person_info = this.state.persons;
        const array_of_repo = this.state.repo;
       
        return (
            <div className="container">
                <div className="row down">
                    <div className="col-md-5  justify-content-center">
                        <div className="d-flex flex-column">
                            <img className="image-attack" src={person_info.avatar_url} />
                            <p className="text-center top-bar">
                                {person_info.login}
                            </p>
                            <div className="jumbotron bg-steelblue side-bar">
                                <span className="font-weight-bold">
Account Created On:
                                </span>
                                <span>
{person_info.created_at}
                                </span>
                            </div>

                            <div className="jumbotron bg-steelblue side-bar">
                                <span className="font-weight-bold">
Updated on:
                                </span>
                                <span>
{person_info.updated_at}
                                </span>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-7 top-bar">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column ">
                                <div className="p-3 ">
{person_info.public_repos}
                                </div>
                                <p className="font-weight-bold text-filter">
Repository
                                </p>
                            </div>

                            <div className="d-flex flex-column">
                                <div className="p-3">
                                    {person_info.followers}
                                </div>
                                <p className="font-weight-bold  text-filter">
<Link to={'/followers/' + person_info.login} className="text-filter">
Followers
</Link>
                                </p>
                            </div>

                            <div className="d-flex flex-column">
                                <div className="p-3">
                                    {person_info.following}
                                </div>
                                <p className="font-weight-bold">
Following
                                </p>
                            </div>
                            
                        </div>
                        <div className="hello">
                            {array_of_repo.map((item, key) => (
                                    <div className="item-4">
                                    <p className="text-center">
{item}
                                    </p>
                                    </div>
                            ))}
                        </div>
                    </div>
                   {/*  <ul className="repos">
                        {array_of_repo.map((item, key) => 
                           ( <li key={key}>{item}</li> )
                        )}
                    </ul> */}
                </div>

            </div>
        );
    }
}
export default Profile;
