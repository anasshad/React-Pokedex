import {call, put, takeLatest} from 'redux-saga/effects';
import {MAKE_API_CALL} from './constants';
import HttpService from './services/http-service';
import {hideLoader, postData, postError} from './actions';

const http = new HttpService();

export default function* rootSaga(){
    yield takeLatest([MAKE_API_CALL], handleSagaFetch);
}

function* handleSagaFetch({type, query}){
    try{
        const description = yield call(http.getData, 'description', query);
        const sprite = yield call(http.getData, 'sprite', query);
        yield put(hideLoader());
        yield put(postData('description', description.flavor_text_entries[2].flavor_text));
        yield put(postData('sprite', sprite.sprites.front_default))
    } catch(error){
        yield put(postError(error));
    }
}