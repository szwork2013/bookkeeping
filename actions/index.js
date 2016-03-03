import * as types from '../constants/ActionTypes'

export function createConsumption(text) {
    return { type: types.CREATE_CONSUMPTION, text }
}

export function updateConsumption(id) {
    return { type: types.UPDATE_CONSUMPTION, id }
}

export function deleteConsumption(id, text) {
    return { type: types.DELETE_CONSUMPTION, id, text }
}