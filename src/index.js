import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import { rootReducer } from './components/redux/reducers/rootReducer';
import watchFetchWeather from './components/redux/sagas'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchWeather);

export const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);
