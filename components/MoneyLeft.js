import React, { Component, PropTypes } from 'react'
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import {
    blue500, red500
} from 'material-ui/lib/styles/colors';
import $ from 'jquery';


const MoneyLeft = React.createClass({

    childContextTypes: {
        moneyLeft: React.PropTypes.string
    },

    getChildContext() {
        return {
            moneyLeft: this.state.moneyLeft
        }
    },

    getInitialState() {
        return {
            moneyLeft: '0'
        }
    },

    componentDidMount() {
        $.ajax({
            url: '/money-left',
            type: 'GET',
            success: function(data) {
                this.setState({
                    moneyLeft: '10.2m'//moneyLeft
                });
            }.bind(this)
        });
    },

    render() {

        return (
            <div>
                <Badge
                    badgeStyle={{width:50, height: 50, backgroundColor:blue500, color:'white', left: 10}}
                    badgeContent={this.state.moneyLeft}>
                </Badge>
            </div>
        )
    }
});
/*
MoneyLeft.propTypes = {
    setBudget: PropTypes.func.isRequired
};
*/

export default MoneyLeft