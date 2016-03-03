import React, { Component, PropTypes } from 'react'
import ConsumptionItem from './ConsumptionItem'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { todos, actions } = this.props
        const { filter } = this.state

        const completedCount = todos.reduce((count, todo) =>
                todo.completed ? count + 1 : count,
            0
        )

        return (
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul className="todo-list">
                    {filteredTodos.map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    )}
                </ul>
                {this.renderFooter(completedCount)}
            </section>
        )
    }
}

MainSection.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSection