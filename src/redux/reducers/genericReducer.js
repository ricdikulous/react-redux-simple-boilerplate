import initialState from "./initialState";
import {ACTION} from "../actions/allActions";

export function stuff(state = initialState.stuff, action) {
    switch (action.type) {
        case ACTION:
            return {...state, property: action.value};
        default:
            return state;
    }
}

export function getStuff(state) {
    return state.stuff;
}
