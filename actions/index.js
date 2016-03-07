import * as types from '../constants/ActionTypes'

export function createConsumption(category_id, sum) {
    return { type: types.CREATE_CONSUMPTION, category_id, sum }
}

export function updateConsumption(consumption_id, sum) {
    return { type: types.UPDATE_CONSUMPTION, consumption_id, sum }
}

export function deleteConsumption(consumption_id) {
    return { type: types.DELETE_CONSUMPTION, consumption_id }
}