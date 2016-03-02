import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

import configureStore from './store/configureStore'

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const store = configureStore()

const muiTheme = getMuiTheme();

render(
    <Provider store={store} muiTheme={muiTheme}>
        <App />
    </Provider>,
    document.getElementById('root')
);