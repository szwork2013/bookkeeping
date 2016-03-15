import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link, browserHistory } from 'react-router'

class Header extends Component {
    render() {
        return (
            <AppBar showMenuIconButton={false} title="Bookkeeping Service">
                <RaisedButton onClick={() => browserHistory.push('/')} label="Consumptions" style={{margin:12}} />
                <RaisedButton onClick={() => browserHistory.push('/categories-page')} label="Categories" style={{margin:12}} />
                <RaisedButton onClick={() => browserHistory.push('/reports-page')} label="Reports" style={{margin:12}} />
            </AppBar>
        )
    }
}

export default Header