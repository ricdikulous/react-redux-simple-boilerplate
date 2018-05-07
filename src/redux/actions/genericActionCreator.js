import {ACTION} from "./allActions";

export function doAction() {
    return (dispatch) => {
        dispatch({type: ACTION, value: 'value'});
    }
}
