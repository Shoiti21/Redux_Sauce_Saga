import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createActions, createReducer } from 'reduxsauce';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
/*
 *   USANDO REDUX SAUCE COM REDUX SAGA
 */

// ACTIONS e TYPES

export const { Types, Creators } = createActions({
    somar: ['a', 'b'],
    subtrair: ['a', 'b']
})

//REDUCER
const somar = (state = 0, action) => action.a + action.b
const subtrair = (state = 0, action) => action.a - action.b

const calculadora = createReducer(0, {
    [Types.SOMAR]: somar,
    [Types.SUBTRAIR]: subtrair
})

// STORE
const sagaMiddleware = createSagaMiddleware();
const root = combineReducers({
    calculadora
})
export const storeReduxSaga = createStore(root, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);