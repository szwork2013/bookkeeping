import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

// @TODO: data should come from the backend
const items = [
    <MenuItem key={1} value={1} primaryText="Еда"/>,
    <MenuItem key={2} value={2} primaryText="Спорт"/>,
    <MenuItem key={3} value={3} primaryText="Квартира"/>,
    <MenuItem key={4} value={4} primaryText="Машина"/>,
    <MenuItem key={5} value={5} primaryText="Путешествия"/>
];

class ConsumptionSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }


    render() {
        let self = this
        return (
            <div style={{textAlign:'center'}}>
                <SelectField value={this.state.value} style={{margin:20}} onChange={function(event, index, value) {
                    self.setState({value:value})
                }}>
                    {items}
                </SelectField>
                <FloatingActionButton style={{marginLeft:20}} onClick={this.addConsumption}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        )
    }
}

export default ConsumptionSelect