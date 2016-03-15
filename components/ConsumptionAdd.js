import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TextField from 'material-ui/lib/text-field';
import $ from 'jquery';


class ConsumptionAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category_id: null,
            sum: 100000,
            categories: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories instanceof Array && nextProps.categories.length) {
            this.setState({category_id: nextProps.categories[0].id});
        }
    }

    createConsumption(event) {
        this.props.createConsumption(this.state.category_id, this.state.sum);
    }

    changeSum(event) {
        this.setState({sum:event.target.value})
    }

    changeCategory(event, index, value) {
        this.setState({category_id:value})
    }

    render() {
        const { categories } = this.props;

        return (
            <div style={{textAlign:'center'}}>
                <SelectField value={this.state.category_id} style={{margin:20}} onChange={this.changeCategory.bind(this)}>
                    {categories.map((item, index) => (
                        <MenuItem key={item.id} value={item.id} primaryText={item.name}/>
                    ))}
                </SelectField>
                <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.sum} onChange={this.changeSum.bind(this)} style={{width:100}} hintText='Sum' />
                <FloatingActionButton style={{marginLeft:20}} onClick={this.createConsumption.bind(this)}>
                    <ContentAdd addConsumption />
                </FloatingActionButton>
            </div>
        )
    }
}

ConsumptionAdd.propTypes = {
    createConsumption: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};


export default ConsumptionAdd