import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from '../containers/UserContainer/user-container';
export default class RoutingComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={UserContainer}></Route>
                </div>
            </Router> 
        )
    }
}