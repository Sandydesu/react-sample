import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from '../containers/UserContainer/users-container';
import { HomePageContainer } from '../containers/HomePageContainer';
export default class RoutingComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h5 className="navbar-brand">SANDEEP</h5>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <Router>
                        <div>
                            <Route exact path="/" component={HomePageContainer}></Route>
                            <Route path="/users" component={UserContainer}></Route>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}