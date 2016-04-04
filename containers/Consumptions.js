import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'

class Consumptions extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(actions.initConsumptions());
        dispatch(actions.initCategories());
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
    consumptions: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
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