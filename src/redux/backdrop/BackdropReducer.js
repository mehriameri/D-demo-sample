import { Has_Backdrop } from "./ActionTypes";

const initState = {
    backdropState: false
}

const BackdropReducer = (state = initState, action) => {
    switch (action.type) {
        case Has_Backdrop:
            return {
                ...state,
                backdropState: action.payload
            }
        default: return state
    }

}

export default BackdropReducer;