import { ADD_FEATURE, REMOVE_FEATURE } from "./type";

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
