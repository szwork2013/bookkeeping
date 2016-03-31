import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CircularProgress from 'material-ui/lib/circular-progress';

import BudgetManage from '../components/BudgetManage';

import $ from 'jquery';


class Settings extends Component {

    componentWillMount() {
        this.props.dispatch(actions.initBudget());
        console.log(this.props);
    }


    render() {
        const { budget, actions } = this.props;

        if (!budget) {
            return false;
        }

        return (
            <div>
                <BudgetManage budget={budget} setBudget={actions.setBudget}/>
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