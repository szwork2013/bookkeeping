import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';

import Header from '../components/Header'
import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'

import { Router, Route, hashHistory } from 'react-router'

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

export default function App({ children }) {

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Paper>
                <Header />
                <div>{children}</div>
            </Paper>
        </MuiThemeProvider>
    )
}