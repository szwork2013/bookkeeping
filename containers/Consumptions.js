import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'

import { Router, Route, hashHistory } from 'react-router'
import $ from 'jquery';


class Consumptions extends Component {

    componentWillMount() {
        this.props.dispatch(actions.initConsumptions());
        this.props.dispatch(actions.initCategories());
    }

    render() {
        const { consumptions, categories, actions } = this.props;

        return (
            <div>
                <ConsumptionAdd createConsumption={actions.createConsumption} categories={categories}/>
                <ConsumptionTable
                    consumptions={consumptions}
                    deleteConsumption={actions.deleteConsumption}
                    updateConsumption={actions.updateConsumption}/>
            </div>
        )
    }
}

Consumptions.propTypes = {
    actions: PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
    return {
        consumptions: state.consumptions,
        categories: state.categories
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Consumptions)