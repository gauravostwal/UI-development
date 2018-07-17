import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import Profile from './components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Follower from './components/Followers/followers.js';
import {
BrowserRouter as Router, Route, IndexRoute, browserHistory 
} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/users/:id" render={props => <Profile {...props} />} />
            <Route path="/followers/:id" render={props => <Follower {...props} />} />
        </div>
    </Router>, document.getElementById('root')
);
