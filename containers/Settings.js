import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CircularProgress from 'material-ui/lib/circular-progress';

import BudgetManage from '../components/BudgetManage';

import $ from 'jquery';


class Settings extends Component {

    constructor(props) {
        super(props);

        let budget;

        $.ajax({
            url: '/current-budget',
            type: 'GET',
            async: false,
            success: function(data) {
                budget = data;
            }
        });

        this.state = {
            budget: budget
        }
    }


    render() {
        const { actions } = this.props;

        return (
            <div>
                <BudgetManage budget={this.state.budget} setBudget={actions.setBudget}/>
            </div>
        )

    }
}

Settings.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        budget: state.settings.budget
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)