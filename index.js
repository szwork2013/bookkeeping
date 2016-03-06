import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { combineReducers, createStore } from 'redux'

import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import Paper from 'material-ui/lib/paper';

import consumptions from './reducers/consupmptions'
import App from './containers/App'
import Reports from './containers/Reports'
import Header from './components/Header'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const reducers = combineReducers({
    consumptions,
    routing: routerReducer
});

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

render(
    (<Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Paper>
                <Header />
                <Router history={history}>
                    <Route path="/" component={App} />
                    <Route path="/reports" component={Reports}/>
                </Router>
            </Paper>
        </MuiThemeProvider>
    </Provider>),
    document.getElementById('root')
);
