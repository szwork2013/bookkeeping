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
        const { consumptions, actions } = this.props

        // @TODO: data should come from the backend
        const serverConsumptions = [
            {
                id: 1,
                name: 'Rent payments',
                sum: '34.000',
                date: '19.02.2016'
            },
            {
                id: 2,
                name: 'New Laptop',
                sum: '100.000',
                date: '20.02.2016'
            }
        ]

        const allConsumptions = serverConsumptions.concat(consumptions)

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Paper>
                    <Header />
                    <ConsumptionAdd createConsumption={actions.createConsumption}/>
                    <ConsumptionTable consumptions={allConsumptions}/>
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