import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { combineReducers, createStore } from 'redux'

import consumptions from './reducers/consupmptions'
import categories from './reducers/categories'
import App from './containers/App'
import Reports from './containers/Reports'
import Consumptions from './containers/Consumptions'
import Categories from './containers/Categories'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const reducers = combineReducers({
    consumptions,
    categories,
    routing: routerReducer
});

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

render(
    (<Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Consumptions} />
                <Route path="reports-page" component={Reports}/>
                <Route path="categories-page" component={Categories}/>
            </Route>
        </Router>
    </Provider>),
    document.getElementById('root')
);
