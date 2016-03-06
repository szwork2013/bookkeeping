import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as actions from '../actions'
import Paper from 'material-ui/lib/paper';
import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'
import {deepOrange500} from 'material-ui/lib/styles/colors';

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import { Router, Route, hashHistory } from 'react-router'

class Reports extends Component {

    render() {
        return (
            <div>reports here
                </div>
        )
    }
}

export default Reports