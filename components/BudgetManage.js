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
            comment: 'Salary'
        };
    }

    setBudget(event) {
        this.props.setBudget(this.state.sum, this.state.comment);
    }

    changeSum(event) {
        this.setState({sum:event.target.value})
    }

    changeComment(event) {
        this.setState({comment:event.target.value})
    }

    render() {
        const { budget, actions } = this.props;
        return (
            <div style={{textAlign:'center', padding:40}}>
                <h2>Budget for {budget.date}: {budget.sum}</h2>
                <TextField inputStyle={{textAlign:'center'}} defaultValue={budget.sum} onChange={this.changeSum.bind(this)} style={{width:200}} hintText='Sum' />
                <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.comment} onChange={this.changeComment.bind(this)} style={{width:400}} hintText='Comment' />
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