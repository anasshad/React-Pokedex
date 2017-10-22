import {MAKE_API_CALL, HIDE_LOADER, POST_DATA, POST_ERROR} from '../constants';

export function makeApiCall(query){
    const action = {
        type : MAKE_API_CALL,
        query
    }

    return action;
}

export function hideLoader(){
    const action = {
        type: HIDE_LOADER,
    }

    return action;
}

export function postData(dataType, data){
    const action = {
        type: POST_DATA,
        dataType,
        data
    }

    return action;
}

export function postError(error){
    const action = {
        type: POST_ERROR,
        error
    }

    return action;
}