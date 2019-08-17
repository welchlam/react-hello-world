import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_FEATURE, REMOVE_FEATURE } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const addFeature = id => ({
    type: ADD_FEATURE,
    payload: {id}
})

export const removeFeature = function (id) {
    return {
        type: REMOVE_FEATURE,
        payload: {id}
    }
}
