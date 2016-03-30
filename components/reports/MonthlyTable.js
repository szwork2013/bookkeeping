import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import FontIcon from 'material-ui/lib/font-icon';
import {
    green500,
    red500
} from 'material-ui/lib/styles/colors';

import $ from 'jquery';

const MonthlyTable = React.createClass({

    getInitialState: function() {
        let tableRows = [];
        let salary = 0;
        $.ajax({
            url: '/monthly-table',
            type: 'GET',
            async: false,
            success: function(data) {
                tableRows = data;
            }
        });

        $.ajax({
            url: 'https://www.mtbank.by/currxml.php',
            type: 'GET',
            async: false,
            success: function(data) {
                let currencies, code, codeTo, sale, purchase;
                currencies = $(data).find('currency');
                for (var i = 0; i < currencies.length; i++) {
                    let item = currencies[i];
                    code = $(item).find('code').text();
                    codeTo = $(item).find('codeTo').text();
                    if (code === 'BYR' && codeTo === 'USD') {
                        //sale = parseInt($(item).find('sale').text());
                        purchase = parseInt($(item).find('purchase').text());
                        //salary = 800 * ((sale + purchase) / 2);
                        salary = 800 * purchase;
                        break;
                    }
                }
            }
        });

        return {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            salary: salary,
            salaryPerDay: parseInt(salary / 30),
            tableRows: tableRows
        };
    },

    getRate: function(sum) {
        if (this.state.salaryPerDay > sum) {
            return (<FontIcon color={green500} className="material-icons">thumb_up</FontIcon>);
        }
        else if (this.state.salaryPerDay < sum) {
            return (<FontIcon color={red500} className="material-icons">thumb_down</FontIcon>);
        }
    },

    render() {

        return (
            <Table
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}>
                <TableHeader enableSelectAll={this.state.enableSelectAll}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" tooltip="" style={{textAlign: 'center'}}>
                            Total Salary: {this.state.salary}, Consumptions per day: {this.state.salaryPerDay}
                        </TableHeaderColumn>
                    </TableRow>
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
                            <TableRowColumn>
                                {item.sum}&nbsp;
                                {this.getRate(item.sum)}
                            </TableRowColumn>
                            <TableRowColumn>{item.comments}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
});

export default MonthlyTable