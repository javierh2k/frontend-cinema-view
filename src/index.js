import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App';

const history = createHistory();
const middleware = [ promise(), routerMiddleware(history), thunk];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);


ReactDOM.render(
<Provider store={store}>
    <App history={ history } />
</Provider>, document.getElementById('root'));
registerServiceWorker();
