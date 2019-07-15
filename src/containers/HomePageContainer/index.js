import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class HomePageContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Sample React Project</h1>
                    <p>We implemented Rreact for web development. we used Node js Rest apis for display user info</p>
                </div>
                <button>
                    <Link to="/users">UsersList</Link>
                </button>
            </div>

        )
    }
}