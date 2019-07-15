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
            <div className="container">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="first_name">First_name:</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" value={this.state.first_name} placeholder="First name" onChange={this.updateValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last_name:</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" value={this.state.last_name} placeholder="Last name" onChange={this.updateValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" className="form-control" id="age" name="age" value={this.state.age} placeholder="Age" onChange={this.updateValue} />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.addNewUser}>Submit</button>
                </form>
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