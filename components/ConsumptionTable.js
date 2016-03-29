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
import Divider from 'material-ui/lib/divider';

class ConsumptionTable extends Component {

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
            deselectOnClickaway: false,
            isToolbarOpen: false,
            toolbarAnchorEl: null,
            toolbarConsumption: {id: null, sum: null, comment: null, ts: null}
        };
    }

    handleToolbarOpen(rowIndex, cellIndex, event) {
        this.setState({
            isToolbarOpen: true,
            toolbarAnchorEl: event.target,
            toolbarConsumption: Object.create(this.props.consumptions[rowIndex])
        });
    };

    handleToolbarClose(event) {
        this.setState({
            isToolbarOpen: false,
            toolbarConsumption: {id: null, sum: null, ts: null}
        });
    };

    deleteConsumption() {
        this.props.deleteConsumption(this.state.toolbarConsumption.id);
        this.handleToolbarClose();
    }

    updateConsumption(event) {
        this.props.updateConsumption(this.state.toolbarConsumption.id, this.state.toolbarConsumption.sum, this.state.toolbarConsumption.comment);
        this.handleToolbarClose();
    }

    changeSum(event) {
        let toolbarConsumption = this.state.toolbarConsumption;
        toolbarConsumption.sum = event.target.value;
        this.setState({toolbarConsumption: toolbarConsumption});
    }

    changeComment(event) {
        let toolbarConsumption = this.state.toolbarConsumption;
        toolbarConsumption.comment = event.target.value;
        this.setState({toolbarConsumption: toolbarConsumption});
    }

    render() {
        const { consumptions, actions } = this.props;
        return (
            <div>
                <Table
                    onCellClick={this.handleToolbarOpen.bind(this)}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}>
                    <TableHeader enableSelectAll={this.state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn colSpan="5" tooltip="List of last 20 Consumptions" style={{textAlign: 'right'}}>
                                List of last 20 Consumptions
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow >
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Sum">Sum</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Comment">Comment</TableHeaderColumn>
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
                                <TableRowColumn>{consumption.comment}</TableRowColumn>
                                <TableRowColumn>{consumption.ts}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Popover
                    useLayerForClickAway={false}
                    onRequestClose={this.handleToolbarClose.bind(this)}
                    open={this.state.isToolbarOpen}
                    anchorEl={this.state.toolbarAnchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <p style={{fontSize:11, textAlign:'center'}}>Consumption: ID {this.state.toolbarConsumption.id}</p>
                    <Divider />
                    <div style={{textAlign: 'center'}}>
                        <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.toolbarConsumption.sum} onChange={this.changeSum.bind(this)} hintText='Sum' style={{width:100}}/>
                        <br />
                        <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.toolbarConsumption.comment} onChange={this.changeComment.bind(this)} hintText='Comment' style={{width:100}}/>
                    </div>
                    <div>
                        <RaisedButton label="Edit" secondary={true} style={{margin:12}} onClick={this.updateConsumption.bind(this)} />
                        <RaisedButton label="Delete" primary={true} style={{margin:12}} onClick={this.deleteConsumption.bind(this)}/>
                    </div>
                </Popover>
            </div>
        )
    }
}

export default ConsumptionTable;