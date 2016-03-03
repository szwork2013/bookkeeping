import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as actions from '../actions'
import Paper from 'material-ui/lib/paper';
import ConsumptionAdd from '../components/ConsumptionAdd'
import ConsumptionTable from '../components/ConsumptionTable'
import {deepOrange500} from 'material-ui/lib/styles/colors';

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends Component {

    render() {
        const {consumptions, actions } = this.props
        console.log(consumptions)
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Paper>
                    <Header />
                    <ConsumptionAdd createConsumption={actions.createConsumption}/>
                    <ConsumptionTable consumptions={consumptions}/>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    consumptions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        consumptions: state.consumptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)