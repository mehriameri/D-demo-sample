import { Has_Backdrop } from "./ActionTypes";

export const hasBackdrop = (backdropState) => {
    return {
        type: Has_Backdrop,
        payload: backdropState
    }
}