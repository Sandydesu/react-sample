import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class HomePageContainer extends Component {
    render() {
        return (
            <div>
                <Link to="/users">UsersList</Link>
            </div>
        )
    }
}