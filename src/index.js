import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import AppReduxSaga from './AppReduxSaga';
import AppReduxSauce from './AppReduxSauce';
import { store } from './store/calculadora';
import { storeReduxSauce } from './store/calculadoraReduxSauce';
import { storeReduxSaga } from './store/calculadoraReduxSaga';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root-redux')
);

ReactDOM.render(
  <Provider store={ storeReduxSauce }>
    <AppReduxSauce />
  </Provider>,
  document.getElementById('root-reduxsauce')
);

ReactDOM.render(
  <Provider store={ storeReduxSaga }>
    <AppReduxSaga />
  </Provider>,
  document.getElementById('root-reduxsaga')
);
