import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Pokedex from './components/Pokedex';
import Reducer from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import PageShell from './components/PageShell';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={PageShell(Home)} />
                <Route exact path='/pokedex' component={PageShell(Pokedex)} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)