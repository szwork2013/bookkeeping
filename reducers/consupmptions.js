import { CREATE_CONSUMPTION, UPDATE_CONSUMPTION, DELETE_CONSUMPTION } from '../constants/ActionTypes'

export default function consumptions(state = [], action) {
    console.log(action.type)
    switch (action.type) {
        case CREATE_CONSUMPTION:
            return [
                {
                    id: 999,//state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    name: action.name,
                    sum: action.sum,
                    date: '23.03.2016'
                },
                ...state
            ]

        case UPDATE_CONSUMPTION:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case DELETE_CONSUMPTION:
            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, { text: action.text }) :
                    todo
            )

        default:
            return state
    }
}