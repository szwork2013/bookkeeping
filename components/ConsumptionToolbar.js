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
import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';

import $ from 'jquery';

class ConsumptionToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false
        };
    }

    deleteConsumption() {
        console.log(this.props.consumptionIndex)
    }

    updateConsumption() {
        console.log(this.props.consumptionIndex)
    }

    render() {
        const { consumptions, actions, consumptionIndex } = this.props;
        return (
            <span>
                <RaisedButton label="Edit" secondary={true} style={{margin:12}} onClick={this.updateConsumption.bind(this)} />
                <RaisedButton label="Delete" primary={true} style={{margin:12}} onClick={this.deleteConsumption.bind(this)}/>
            </span>
        )
    }
}

export default ConsumptionToolbar;