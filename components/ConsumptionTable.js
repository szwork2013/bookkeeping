import React, { PropTypes, Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TextField from 'material-ui/lib/text-field';
import Toggle from 'material-ui/lib/toggle';
import $ from 'jquery';

class ConsumptionTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: true,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
        };
    }

    render() {
        const { consumptions, actions } = this.props;

        return (
            <Table
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}>
                <TableHeader enableSelectAll={this.state.enableSelectAll}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="List of last 20 Consumptions" style={{textAlign: 'center'}}>
                            List of last 20 Consumptions
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow >
                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Sum">Sum</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Date">Date</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}>
                    {consumptions.map((consumption, index) => (
                        <TableRow key={index} selected={false}>
                            <TableRowColumn>{consumption.id}</TableRowColumn>
                            <TableRowColumn>{consumption.name}</TableRowColumn>
                            <TableRowColumn>{consumption.sum}</TableRowColumn>
                            <TableRowColumn>{consumption.ts}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default ConsumptionTable;