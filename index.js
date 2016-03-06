import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { combineReducers, createStore } from 'redux'

import consumptions from './reducers/consupmptions'
import App from './containers/App'
import Reports from './containers/Reports'
import Consumptions from './containers/Consumptions'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const reducers = combineReducers({
    consumptions,
    routing: routerReducer
});

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

render(
    (<Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Consumptions}/>
                <Route path="reports" component={Reports}/>
            </Route>
        </Router>
    </Provider>),
    document.getElementById('root')
);
