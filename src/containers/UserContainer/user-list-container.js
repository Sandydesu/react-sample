import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UsersListContainer extends Component {
    render() {
        const { users } = this.props;
        const list = users.map((value, index) => {
            return (<li key={'user-' + index}>
                <Link to={`${this.props.match.url}/details/${value._id}`}>{value.first_name}</Link>
            </li>)
        });
        return (
            <ul className="nav nav-pills nav-stacked">
                {list}
            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    return { users: state.UserReducer.users };
};


export default connect(mapStateToProps)(UsersListContainer);