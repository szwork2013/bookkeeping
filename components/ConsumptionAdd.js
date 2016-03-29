import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import $ from 'jquery';


class ConsumptionAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category_id: null,
            sum: 100000,
            comment: '',
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

    changeComment(event) {
        this.setState({comment:event.target.value})
    }

    changeCategory(event, index, value) {
        this.setState({category_id:value})
    }

    render() {
        const { categories } = this.props;

        return (
            <div style={{textAlign:'center', padding:40}}>
                <SelectField value={this.state.category_id} style={{position: 'relative', top:4}} onChange={this.changeCategory.bind(this)}>
                    {categories.map((item, index) => (
                        <MenuItem key={item.id} value={item.id} primaryText={item.name}/>
                    ))}
                </SelectField>
                &nbsp;
                <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.sum} onChange={this.changeSum.bind(this)} style={{width:100}} hintText='Sum' />
                <br />
                <TextField inputStyle={{textAlign:'center'}} defaultValue={this.state.comment} onChange={this.changeComment.bind(this)} hintText='Comment' />
                <br />
                <FloatingActionButton onClick={this.createConsumption.bind(this)} style={{marginTop:20}}>
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