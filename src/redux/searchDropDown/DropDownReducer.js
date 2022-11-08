import {
    Show_Drop_Down,
    Hidden_Drop_Down
} from './ActionTypes';

const initState = {
    dropDownState: false
}
const DropDownReducer = (state = initState, action) => {
    switch (action.type) {
        case Show_Drop_Down:
            return {
                ...state,
                dropDownState: true
            }
        case Hidden_Drop_Down:
            return {
                ...state,
                dropDownState: false
            }
        default: return state
    }
}
export default DropDownReducer;