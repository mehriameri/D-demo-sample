import { Is_Authenticated,Reset_login } from './ActionTypes';

const initState = {
    user: null,
}
const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case Is_Authenticated:
            return {
                ...state,
                user: action.user //{ phoneNumber: newPhoneNumber }
            }
            case Reset_login:
                return{
                    user:null
                }
        default: return state;
    }
}

export default LoginReducer;