import { ITEMS_LIST_FAIL, ITEMS_LIST_REQUEST, ITEMS_LIST_SUCCESS } from "../constants/itemsConstants";

export const itemListReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ITEMS_LIST_REQUEST:
            return { loading: true }
        case ITEMS_LIST_SUCCESS:
            return { loading: false, items: action.payload}
        case ITEMS_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
           return state
    }
}