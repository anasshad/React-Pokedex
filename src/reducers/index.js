import {MAKE_API_CALL, HIDE_LOADER, POST_DATA, POST_ERROR} from '../constants';

const initState = {
    query: null,
    show_loader: false,
    error: null,
}

export default function (state=initState, action){
    switch(action.type){
        case (MAKE_API_CALL):
            console.log('MAKE API CALL');
            return {
                ...state,
                query: action.query,
                show_loader: true,
                error: null,
            }
        case (HIDE_LOADER):
            console.log('HIDE LOADER');
            return {
                ...state,
                show_loader: false,
            }
        case (POST_DATA):
            console.log('POST DATA',action.dataType, action.data);
            if(action.dataType === 'description'){
                console.log('sadlfjsoiejfsf');
                return{
                    ...state,
                    description: action.data,
                    error: null,
                }
            }else if(action.dataType === 'sprite'){
                return{
                    ...state,
                    sprite: action.data,
                    error: null,
                }
            };
            break;
        case(POST_ERROR):
            console.log(action.error);
            return {
                ...state,
                error: action.error
            }
            
        default:
            return state;
    }
}