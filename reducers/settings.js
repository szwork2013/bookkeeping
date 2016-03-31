import { INIT_BUDGET, SET_BUDGET } from '../constants/ActionTypes'
import $ from 'jquery';

let initialState = [];

export default function settings(state = initialState, action) {
    switch (action.type) {
        case INIT_BUDGET:
            return {budget: action.budget};

        case SET_BUDGET:
            let newState = Object.create(state);
            newState.budget.sum = action.sum;
            newState.budget.comment = '';
            return newState;

        default:
            return state
    }
}