import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/lib/app-bar';
import AutoComplete from 'material-ui/lib/auto-complete';

class Header extends Component {
    handleSave(text) {
        if (text.length !== 0) {
            this.props.addConsumption(text)
        }
    }

    render() {
        return (
            <header className="header">
                <AppBar showMenuIconButton={false} title="Bookkeeping Serice" />
                <AutoComplete fullWidth={true}
                              floatingLabelText="Fill in your consumption"
                              dataSource={['Еда', 'Машина', 'Квартира', 'Отдых']}
                              onUpdateInput={this.handleSave.bind(this)}
                             />
            </header>
        )
    }
}

//Header.propTypes = {
    //addConsumption: PropTypes.func.isRequired
//}

export default Header