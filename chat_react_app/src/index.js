import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // Where we will store the app data
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import setupSocket from './sockets'
import reducers from './reducers'
import handlNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handlNewMessage, {socket, username})

// In redux whenever you want to change the state you need an action
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// handle side effects in redux.
// So to handle creating a Websocket event when the user type a message,
// so it can be broadcast to all connected clients and tp perform this operation
// in a clean way , we`re going to make use of redux-saga .

// redux-saga: is a library to provide a good way to handle side-effects and redux
// side-effect: because whenever you are getting information from the server, and you are not sure 
// exactly what`s going to happem (it could be an error , may you get the right info).

// in redux you always want things that happen right away, but with redux-saga
// it allows things to happen more asynchronosly and account for side effects that
// could happen where function is changing something outside the function .

// Normally in redux every function should be pure function that dont change anything
// outside the function , but if you dealing with a server just by the very nature you are 
// going to be dealing with something outside of your function so that is why to use redux-saga
// which can handle these side-effects so 
