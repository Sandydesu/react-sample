import { USERS_INFO_RECEIVED, USER_ADDED, USER_SELECTED } from '../constants';
export default function UserReducer(state, action) {
    switch (action.type) {
        case USERS_INFO_RECEIVED:
            return Object.assign({}, state, { users: action.payload, isEditing: false });
        case USER_ADDED:
            return Object.assign({}, state, { isEditing: true });
        case USER_SELECTED:
            return Object.assign({}, state, { selectedUser: action.payload });
        default: return Object.assign({}, state, { users: [], isEditing: false, selectedUser: {} });;
    }
}