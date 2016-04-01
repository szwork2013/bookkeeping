import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove';
import TextField from 'material-ui/lib/text-field';
import { connect } from 'react-redux'
import $ from 'jquery';
import * as types from '../constants/ActionTypes'

import {
    blue500, red500
} from 'material-ui/lib/styles/colors';

const BudgetManage = React.createClass({

    getDefaultProps() {
        return {
            budget: {
                sum: 0,
                date: null,
                comment: ''
            }
        }
    },

    setBudget(event) {
        let sum = document.getElementById('sum').value;
        let comment = document.getElementById('comment').value;

        this.props.setBudget(sum, comment);
    },


    render() {
        const { budget, actions } = this.props;

        return (
            <div style={{textAlign:'center', padding:40}}>
                <h2>Budget for {budget.date}: {budget.sum}</h2>
                <TextField id="sum" inputStyle={{textAlign:'center'}} style={{width:200}} hintText='Sum' />
                <TextField id="comment" inputStyle={{textAlign:'center'}} defaultValue={budget.comment} style={{width:400}} hintText='Comment' />
                <FloatingActionButton backgroundColor={blue500} style={{marginTop:20}} onClick={this.setBudget}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
});

BudgetManage.propTypes = {
    setBudget: PropTypes.func.isRequired
};


export default BudgetManage