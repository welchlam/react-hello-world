import { ADD_FEATURE, REMOVE_FEATURE } from "../../actionTypes";

const initialState = [{
    id: 1,
    name: 'feature 1',
    detail: 'feature 1 detail'
}, {
    id: 2,
    name: 'feature 2',
    detail: 'feature 2 detail'
}, {
    id: 3,
    name: 'feature 3',
    detail: 'feature 3 detail'
}, {
    id: 4,
    name: 'feature 4',
    detail: 'feature 4 detail'
}];

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_FEATURE: {
            const {id} = action.payload;
            const newFeature = {
                id,
                name: 'feature ' + id,
                detail: 'feature ' + id + ' detail'
            }
            return [...state, newFeature]
        }
        case REMOVE_FEATURE: {
            const {id} = action.payload;
            return [...state].filter(item => item.id !== id);
        }
        default:
            return state;
    }
}