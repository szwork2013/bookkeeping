import * as types from '../constants/ActionTypes'

export function createConsumption(category_id, sum) {
    return { type: types.CREATE_CONSUMPTION, category_id, sum }
}

export function updateConsumption(id) {
    return { type: types.UPDATE_CONSUMPTION, id }
}

export function deleteConsumption(id, text) {
    return { type: types.DELETE_CONSUMPTION, id, text }
}