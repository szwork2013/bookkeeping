import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

class Header extends Component {
    render() {
        return (
            <AppBar showMenuIconButton={false} title="Bookkeeping Serice">
                <RaisedButton label="Consumptions" style={{margin:12}} />
                <RaisedButton label="Categories" style={{margin:12}} />
                <RaisedButton label="Reports" style={{margin:12}} />
            </AppBar>
        )
    }
}

export default Header