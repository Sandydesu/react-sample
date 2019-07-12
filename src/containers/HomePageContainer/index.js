import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class HomePageContainer extends Component {
    render() {
        return (
            <div className="row">
                <button>
                    <Link to="/users">UsersList</Link>
                </button>
            </div>
        )
    }
}