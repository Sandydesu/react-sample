import { LOADING, USERS_INFO_RECEIVED } from '../constants';
export default function UserReducer(state = [], action) {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, { isLoading: true });
        case USERS_INFO_RECEIVED:
            return Object.assign({}, state, { isLoading: false, users: action.payload });
        default: return Object.assign({}, state, { isLoading: true, users: [] });;
    }
}