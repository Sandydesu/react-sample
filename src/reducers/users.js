import { LOADING, USERS_INFO_RECEIVED, USER_ADDED } from '../constants';
export default function UserReducer(state, action) {
    switch (action.type) {
        case USERS_INFO_RECEIVED:
            return Object.assign({}, state, { users: action.payload, isEditing: false });
        case USER_ADDED:
            return Object.assign({}, state, { isEditing: true });
        default: return Object.assign({}, state, { users: [], isEditing: false });;
    }
}