import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'

import { Router, Route, hashHistory } from 'react-router'


class Consumptions extends Component {

    render() {
        const { consumptions, actions } = this.props;

        return (
            <div>
                <ConsumptionAdd createConsumption={actions.createConsumption}/>
                <ConsumptionTable consumptions={consumptions} deleteConsumption={actions.deleteConsumption} updateConsumption={actions.updateConsumption}/>
            </div>
        )
    }
}

Consumptions.propTypes = {
    consumptions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        consumptions: state.consumptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Consumptions)