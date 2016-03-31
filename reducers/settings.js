import { INIT_BUDGET, SET_BUDGET } from '../constants/ActionTypes'
import $ from 'jquery';

let initialState = [];

export default function settings(state = initialState, action) {
    switch (action.type) {
        case INIT_BUDGET:
            return {budget: action.budget};

        case SET_BUDGET:
            return {
                sum: action.sum,
                comment: action.comment
            };

        default:
            return state
    }
}