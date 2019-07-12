import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewuser } from '../../actions/users';
class UserEditContainer extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            age: ''
        }
    }

    componentWillReceiveProps(props) {
        if (props.isCLear) {
            this.setState({
                first_name: '',
                last_name: '',
                age: ''
            });
        }
    }

    updateValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addNewUser = () => {
        if (this.state.first_name && this.state.age) {
            this.props.addNewOne(this.state);
        }
    }

    render() {
        return (
            <div className="col-md-4">
                <input type="text" name="first_name" value={this.state.first_name} placeholder="First name" onChange={this.updateValue} />
                <input type="text" name="last_name" value={this.state.last_name} placeholder="Last name" onChange={this.updateValue} />
                <input type="number" name="age" value={this.state.age} placeholder="Age" onChange={this.updateValue} />
                <button onClick={this.addNewUser}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isCLear: state.UserReducer.isEditing }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewOne: (user) => dispatch(addNewuser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer);