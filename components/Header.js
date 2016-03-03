import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/lib/app-bar';

class Header extends Component {
    render() {
        return (
            <AppBar showMenuIconButton={false} title="Bookkeeping Serice" />
        )
    }
}

export default Header