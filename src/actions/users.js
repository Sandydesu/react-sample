import { USERS_INFO_RECEIVED } from '../constants';
import { UsersService } from '../services/users';
const UsersList = (data) => {
    return {
        type: USERS_INFO_RECEIVED,
        payload: data
    }
}

export const getUsers = () => {
    return async function (dispatch) {
        const users = await new UsersService().getUsers();
        dispatch(UsersList(users));
    }
}