import {
    Show_Drop_Down,
    Hidden_Drop_Down
} from './ActionTypes';

export const showDropDown = () => {
    return {
        type: Show_Drop_Down
    }
};
export const hiddenDropDown = () => {
    return {
        type: Hidden_Drop_Down
    }
}