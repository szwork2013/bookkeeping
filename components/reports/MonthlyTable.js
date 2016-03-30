import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';

import $ from 'jquery';

var Chart = require('react-google-charts').Chart;

const MonthlyTable = React.createClass({

    getInitialState: function() {
        let tableRows = [];
        $.ajax({
            url: '/monthly-table',
            type: 'GET',
            async: false,
            success: function(data) {
                tableRows = data;
            }
        });

        return {
            tableRows: tableRows
        };
    },

    render() {

        return (
            <Table
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}>
                <TableHeader enableSelectAll={this.state.enableSelectAll}>
                    <TableRow >
                        <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Categories">Categories</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Sum">Sum</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Comments">Comments</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}>
                    {this.state.tableRows.map((item, index) => (
                        <TableRow key={index} selected={false}>
                            <TableRowColumn>{item.date}</TableRowColumn>
                            <TableRowColumn>{item.categories}</TableRowColumn>
                            <TableRowColumn>{item.sum}</TableRowColumn>
                            <TableRowColumn>{item.comments}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
});

export default MonthlyTable