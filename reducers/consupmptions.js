import { CREATE_CONSUMPTION, UPDATE_CONSUMPTION, DELETE_CONSUMPTION } from '../constants/ActionTypes'
import $ from 'jquery';

let initialState = [];
$.ajax({
    url: '/consumptions',
    type: 'GET',
    async: false,
    success: function(data) {
        initialState = data;
    }
});



export default function consumptions(state = initialState, action) {
    switch (action.type) {
        case CREATE_CONSUMPTION:
            let lastRow = {};
            $.ajax({
                url: '/consumptions',
                type: 'POST',
                async: false,
                data: {
                    category_id: action.category_id,
                    sum: action.sum
                },
                success(data) {
                    lastRow = data;
                }
            });
            return [
                lastRow,
                ...state
            ];

        case UPDATE_CONSUMPTION:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case DELETE_CONSUMPTION:
            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, { text: action.text }) :
                    todo
            );

        default:
            return state
    }
}