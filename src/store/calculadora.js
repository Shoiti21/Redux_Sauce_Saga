import { combineReducers, createStore } from 'redux'
/*
 *   USANDO SOMENTE REDUX
 */

// ACTIONS
export function somar(a, b) {
    return {
        type: "SOMAR",
        payload: {
            a,
            b
        }
    };
}
export function subtrair(a, b) {
    return {
        type: "SUBTRAIR",
        payload: {
            a,
            b
        }
    };
}

//REDUCER
function calculadora(state = 100, action) {
    switch (action.type) {
        case "SOMAR":
            return action.payload.a + action.payload.b;
        case "SUBTRAIR":
            return action.payload.a - action.payload.b;
        default:
            return state;
    }
}

const root = combineReducers({
    calculadora
})
export const store = createStore(root);