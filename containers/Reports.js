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
var Chart = require('react-google-charts').Chart;
import { Router, Route, hashHistory } from 'react-router'
import $ from 'jquery';

const Reports = React.createClass({

    getInitialState: function() {
        let columns = [];
        let rows = [];
        $.ajax({
            url: '/report1-data',
            type: 'GET',
            async: false,
            success: function(data) {
                columns = data.columns;
                rows = data.rows;
            }
        });

        return {
            chart:{
                columns : [{label:'Date', type:'string'}].concat(columns),
                rows: rows,
                height: 500,
                options: {curveType: 'function', title: "Your Consumptions", hAxis: {title: 'Day'}, vAxis: {title: 'Sum'}},
                chartType: "LineChart",
                div_id: "chart"
            }
        };
	},

    render: function() {
        return (
            <Chart chartType={this.state.chart.chartType}
                   rows={this.state.chart.rows}
                   columns={this.state.chart.columns}
                   options={this.state.chart.options}
                   height={this.state.chart.height}
                   graph_id={this.state.chart.div_id}  />
        )
    }
});

export default Reports