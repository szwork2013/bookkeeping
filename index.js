import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

import configureStore from './store/configureStore'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const store = configureStore()

import RaisedButton from 'material-ui/lib/raised-button';

render(
    <App store={store} />,
    document.getElementById('root')
);