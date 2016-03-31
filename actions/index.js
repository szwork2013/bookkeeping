import * as types from '../constants/ActionTypes'
import $ from 'jquery';

export function initConsumptions() {
    let consumptions = [];
    $.ajax({
        url: '/consumptions',
        type: 'GET',
        async: false,
        success: function(data) {
            consumptions = data;
        }
    });

    return { type: types.INIT_CONSUMPTIONS, consumptions: consumptions }
}

export function initCategories() {
    let categories = [];
    $.ajax({
        url: '/categories',
        type: 'GET',
        async: false,
        success: function(data) {
            categories = data;
        }
    });

    return { type: types.INIT_CATEGORIES, categories: categories }
}

export function createConsumption(category_id, sum, comment) {
    let lastRow = {};
    $.ajax({
        url: '/consumptions',
        type: 'POST',
        async: false,
        data: {
            category_id: category_id,
            sum: sum,
            comment: comment
        },
        success(data) {
            //@TODO: process errors
            lastRow = data
        }
    });

    return { type: types.CREATE_CONSUMPTION, lastRow: lastRow }

}

export function updateConsumption(consumption_id, sum, comment) {
    $.ajax({
        url: '/consumptions',
        type: 'PUT',
        async: false,
        data: {
            id: consumption_id,
            sum: sum,
            comment: comment
        },
        success(data) {
            //@TODO: process errors
        }
    });

    return { type: types.UPDATE_CONSUMPTION, consumption_id, sum, comment }
}

export function updateCategory(category_id, name) {
    $.ajax({
        url: '/categories',
        type: 'PUT',
        async: false,
        data: {
            id: category_id,
            name: name
        },
        success(data) {
            //@TODO: process errors
        }
    });

    return { type: types.UPDATE_CATEGORY, category_id, name }
}


export function deleteConsumption(consumption_id) {
    $.ajax({
        url: '/consumptions',
        type: 'DELETE',
        async: false,
        data: {
            id: consumption_id
        },
        success(data) {
            //@TODO: process errors
        }
    });

    return { type: types.DELETE_CONSUMPTION, consumption_id }
}

export function createCategory(name) {
    let lastRow = {};
    $.ajax({
        url: '/categories',
        type: 'POST',
        async: false,
        data: {
            name: name
        },
        success(data) {
            //@TODO: process errors
            lastRow = data;
        }
    });

    return { type: types.CREATE_CATEGORY, lastRow: lastRow }
}


export function deleteCategory(category_id) {
    $.ajax({
        url: '/categories',
        type: 'DELETE',
        async: false,
        data: {
            id: category_id
        },
        success(data) {
            //@TODO: process errors
        }
    });

    return { type: types.DELETE_CATEGORY, category_id }
}

export function initBudget() {
    let budget = {sum: null, date: null};
    $.ajax({
        url: '/current-budget',
        type: 'GET',
        async: false,
        success: function(data) {
            budget = data;
        }
    });

    return { type: types.INIT_BUDGET, budget: budget }
}

export function setBudget(sum, comment) {
    $.ajax({
        url: '/budget',
        type: 'POST',
        async: false,
        data: {
            sum: sum,
            comment: comment
        },
        success(data) {
            //@TODO: process errors
        }
    });

    return { type: types.SET_BUDGET, sum, comment}
}