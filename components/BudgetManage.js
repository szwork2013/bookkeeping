import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove';
import TextField from 'material-ui/lib/text-field';
import $ from 'jquery';
import * as types from '../constants/ActionTypes'

import {
    blue500, red500
} from 'material-ui/lib/styles/colors';

class BudgetManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: 'Salary',
            sum: props.budget.sum,
            date: props.budget.date
        }
    }

    setBudget(event) {
        let sum = document.getElementById('sum').value;
        let comment = document.getElementById('comment').value;
        this.props.setBudget(sum, comment);

        this.setState({sum: sum, comment: comment});
    }


    render() {
        const { actions } = this.props;

        return (
            <div style={{textAlign:'center', padding:40}}>
                <h2>Budget for {this.state.date}: {this.state.sum}</h2>
                <TextField id="sum" inputStyle={{textAlign:'center'}} defaultValue={this.state.sum} style={{width:200}} hintText='Sum' />
                <TextField id="comment" inputStyle={{textAlign:'center'}} defaultValue={this.state.comment} style={{width:400}} hintText='Comment' />
                <FloatingActionButton backgroundColor={blue500} style={{marginTop:20}} onClick={this.setBudget.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

BudgetManage.propTypes = {
    setBudget: PropTypes.func.isRequired
};

export default BudgetManage