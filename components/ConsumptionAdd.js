import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TextField from 'material-ui/lib/text-field';
import $ from 'jquery'


class ConsumptionAdd extends Component {

    constructor(props) {
        super(props);

        let categories = [];
        let selected_category = null;
        $.ajax({
            url: '/categories',
            type: 'GET',
            async: false,
            success: function(data) {
                $.each(data, function (index, row) {
                    if (index === 0) {
                        selected_category = row.id
                    }
                    categories.push(<MenuItem key={row.id} value={row.id} primaryText={row.name}/>)
                })
            }
        });

        this.state = {categories: categories, selected_category: selected_category}
    }

    createConsumption(event) {
        this.props.createConsumption(this.state.category_id, this.state.sum)
        this.setState({sum:sum})
    }

    changeSum(event) {
        this.setState({sum:event.target.value})
    }

    changeCategory(event, index, value) {
        this.setState({category_id:value})
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <SelectField value={this.state.selected_category} style={{margin:20}} onChange={this.changeCategory.bind(this)}>
                    {this.state.categories}
                </SelectField>
                <TextField inputStyle={{textAlign:'center'}} onChange={this.changeSum.bind(this)} style={{width:100}} hintText='Sum' />
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