import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UsersListContainer extends Component {
    render() {
        const { users } = this.props;
        const list = users.map((value, index) => {
            return (<div key={'user-' + index}>
                <Link to={`${this.props.match.url}/details/${value._id}`}>{value.first_name}</Link>
            </div>)
        });
        return (
            <div className="col-md-4">
                {list}
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return { users: state.UserReducer.users };
};


export default connect(mapStateToProps)(UsersListContainer);