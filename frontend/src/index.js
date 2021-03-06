import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import reducers from './store/reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
