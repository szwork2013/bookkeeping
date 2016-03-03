import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TextField from 'material-ui/lib/text-field';

// @TODO: data should come from the backend
const items = [
    <MenuItem key={1} value={1} primaryText="Еда"/>,
    <MenuItem key={2} value={2} primaryText="Спорт"/>,
    <MenuItem key={3} value={3} primaryText="Квартира"/>,
    <MenuItem key={4} value={4} primaryText="Машина"/>,
    <MenuItem key={5} value={5} primaryText="Путешествия"/>
];

class ConsumptionAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    createConsumption(text) {
        this.props.createConsumption(text)
    }

    changeState(event, index, value) {
        this.setState({value:value})
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <SelectField value={this.state.value} style={{margin:20}} onChange={this.changeState.bind(this)}>
                    {items}
                </SelectField>
                <TextField inputStyle={{textAlign:'center'}} style={{width:100}} value={'100.000'} hintText='Type in the sum of consumption' />
                <FloatingActionButton style={{marginLeft:20}} onClick={this.createConsumption.bind(this)}>
                    <ContentAdd addConsumption />
                </FloatingActionButton>
            </div>
        )
    }
}

ConsumptionAdd.propTypes = {
    createConsumption: PropTypes.func.isRequired
}


export default ConsumptionAdd