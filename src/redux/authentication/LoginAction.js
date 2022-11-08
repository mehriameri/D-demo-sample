import { Is_Authenticated } from './ActionTypes';

export const isAuthenticated = (newPhoneNumber) => {
    return {
        type: Is_Authenticated,
        user: { phoneNumber: newPhoneNumber }
    }
}
export const resetLogin = () => {
    return {
        type: Is_Authenticated,
    }
}