import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { getUsers } from '../../actions/users';
import UsersListContainer from './user-list-container';
import { UserDetailsContainer } from './user-details-container';
import UserEditContainer from './user-edit-container';
class UserContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { isEditing } = this.props;
        if (isEditing) {
            this.props.getUsers();
        }
        return (
            <div className="row">
                <div classname="col-md-2">
                    <button><Link to={`${this.props.match.url}/add/new-user`}>Add</Link></button>
                </div>
                <Route path={`${this.props.match.url}`} component={UsersListContainer} />
                <Route path={`${this.props.match.url}/details/:id`} component={UserDetailsContainer} />
                <Route path={`${this.props.match.url}/add/new-user`} component={UserEditContainer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.UserReducer.users, isEditing: state.UserReducer.isEditing };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);