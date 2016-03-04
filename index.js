import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { Router, Route, browserHistory } from 'react-router'

import configureStore from './store/configureStore'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const store = configureStore()

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>),
    document.getElementById('root')
);

/*
import { Router, Route, hashHistory } from 'react-router'

render((
        <Router history={hashHistory}>
            <Route path="/" component={App}  />
        </Router>),
    document.getElementById('root')
);
*/