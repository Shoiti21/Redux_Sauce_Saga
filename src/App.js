import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { somar, subtrair } from './store/calculadora';

/*
 *  SEM HOOKS
 */

export default function App(props) {

  const result = useSelector(state => state.calculadora)
  const dispatch = useDispatch()

  const [ ValueA, setValueA] = React.useState(0);
  const [ ValueB, setValueB] = React.useState(0);

  return (
    <div className="App">
      <input type="number" value={ValueA} onChange={(event) => setValueA(parseInt(event.target.value))}></input>
      <input type="number" value={ValueB} onChange={(event) => setValueB(parseInt(event.target.value))}></input>
      <button type="submit" onClick={ () => dispatch(somar(ValueA, ValueB)) }>Somar (A + B)</button>
      <button type="submit" onClick={ () => dispatch(subtrair(ValueA, ValueB)) }>Subtrair (A - B)</button>
      <h2>{"Resultado é " + result}</h2>
    </div>
  );
}