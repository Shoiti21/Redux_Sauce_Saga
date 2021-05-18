import { combineReducers, createStore } from 'redux'
import { createActions, createReducer } from 'reduxsauce';
/*
 *   USANDO REDUX SAUCE
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

const root = combineReducers({
    calculadora
})
export const storeReduxSauce = createStore(root);