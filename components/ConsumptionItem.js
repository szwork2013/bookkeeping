import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ConsumptionItem extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
       return <div>test</div>
    }
}

ConsumptionItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ConsumptionItem