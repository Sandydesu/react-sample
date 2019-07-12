import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from '../containers/UserContainer/users-container';
import { HomePageContainer } from '../containers/HomePageContainer';
export default class RoutingComponent extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/" component={HomePageContainer}></Route>
                    <Route path="/users" component={UserContainer}></Route>
                </div>
            </Router>
        )
    }
}