// styles import (for webpack)
import style from "./styles/style.scss";

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

// Component
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
        <App/>
      </HashRouter>      
    </Provider>        
    , document.querySelector('.app-container'));