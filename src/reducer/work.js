import {HIDEW, SHOWW} from "../action/actionType";

export default function work(state={}, action) {
    switch (action.type){
        case (SHOWW):
            return Object.assign({}, state, {...action.data});
        case (HIDEW):
            return Object.assign({}, state, {...action.data});
        default:
            return state
    }
}