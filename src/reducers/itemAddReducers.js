import { ITEM_ADD_FAIL, ITEM_ADD_REQUEST, ITEM_ADD_SUCCESS } from "../constants/additemConstants";
import { REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAILD } from "../constants/removeItemConstant"

export const itemAddReducer = (state= {}, action) =>{
    switch (action.type) {
        case ITEM_ADD_REQUEST:
            return {loding: true}
        case ITEM_ADD_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case ITEM_ADD_FAIL:
            return{loading: false, error: action.payload}
        default:
            return state;
    }
}

export const itemRemoveReducer = (state= {}, action) =>{
    switch (action.type) {
        case REMOVE_ITEM_REQUEST:
            return {loding: true}
        case REMOVE_ITEM_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case REMOVE_ITEM_FAILD:
            return{loading: false, error: action.payload}
            
        default:
            return state;
    }
}