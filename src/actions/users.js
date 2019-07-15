import { USERS_INFO_RECEIVED, USER_ADDED, USER_SELECTED } from '../constants';
import { UsersService } from '../services/users';

const UsersList = (data) => {
    return {
        type: USERS_INFO_RECEIVED,
        payload: data
    }
}

const UsersAdded = () => {
    return {
        type: USER_ADDED
    }
}

const selectedUser = (data) => {
    return {
        type: USER_SELECTED,
        payload: data
    }
}




export const getUsers = () => {
    return async function (dispatch) {
        const users = await new UsersService().getUsers();
        dispatch(UsersList(users));
    }
}

export const addNewuser = (user) => {
    return async function (dispatch) {
        user.age = parseInt(user.age, 10);
        const result = await new UsersService().addUser(user);
        if (result) {
            dispatch(UsersAdded())
        }
    }
}


export const getById = (id) => {
    return async function (dispatch) {
        const result = await new UsersService().getById(id);
        dispatch(selectedUser(result));

    }
}