import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { getUsers } from '../../actions/users';
import { UserDetailsContainer } from './user-details-container';
class UserContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { isLoading, users } = this.props;
        const list = users.map((value, index) => {
            return (<div key={'user-' + index}>
                <Link to={`${this.props.match.url}/${value._id}`}>{value.first_name}</Link>
            </div>)
        })
        return (
            <div>
                {isLoading ? <div> Welcome to world</div> : list}
                <Route path={`${this.props.match.url}/:id`} component={UserDetailsContainer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.UserReducer.users, isLoading: state.UserReducer.isLoading };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);