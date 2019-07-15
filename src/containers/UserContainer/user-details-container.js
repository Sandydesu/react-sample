import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getById } from '../../actions/users';
class UserDetailsContainer extends Component {

    constructor() {
        super();
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        if (this.state.id !== this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });
            this.props.getUserInfo(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.id !== newProps.match.params.id) {
            this.setState({ id: newProps.match.params.id });
            this.props.getUserInfo(newProps.match.params.id);
        }
    }
    render() {
        const { details } = this.props;
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                First Name
                        </th>
                            <th>
                                Last Name
                        </th>
                            <th>
                                Age
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{details && details.first_name}</td>
                            <td>{details && details.last_name}</td>
                            <td>{details && details.age}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { details: state.UserReducer.selectedUser }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (id) => dispatch(getById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);
