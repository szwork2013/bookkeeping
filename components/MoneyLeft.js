import React, { Component, PropTypes } from 'react'
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import {
    blue500, red500
} from 'material-ui/lib/styles/colors';
import MoneyLeftMixin from '../mixins/MoneyLeft';

const MoneyLeft = React.createClass({
    mixins: [MoneyLeftMixin],

    getInitialState() {
        return {
            moneyLeft: '0m'
        }
    },

    componentDidMount() {
        this.updateMoneyLeft()
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

export default MoneyLeft