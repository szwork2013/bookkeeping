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

const Reports = React.createClass({

    getInitialState: function() {
        return {
            chart:{
                columns : [
                    {
                        label:'Date',
                        type:'string'
                    },
                    {
                        label:'Еда',
                        type:'number'
                    },
                    {
                        label:'Квартира',
                        type:'number'
                    }
                ],
                rows : [
                    ['19.03', 500000, 500000],
                    ['19.04', 1500000, 350000],
                    ['19.05', 800000, 500000],
                    ['19.06', 350000, 1500000]
                ],
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