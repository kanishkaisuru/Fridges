import axios from "axios";
import { REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAILD } from "../constants/removeItemConstant"
import { ITEM_ADD_FAIL, ITEM_ADD_REQUEST, ITEM_ADD_SUCCESS } from "../constants/additemConstants"

export const addItem = (title, expiry) => async(dispatch) => {
    dispatch({type: ITEM_ADD_REQUEST, payload: {title, expiry}});
    try {
        const {data} = await axios.post('https://thefridge-api.karapincha.io/', {title, expiry});
        dispatch({type: ITEM_ADD_SUCCESS, payload: data});
        localStorage.setItem('itemInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ITEM_ADD_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const removeItem = (itemId) => async(dispatch) => {
    dispatch({type: REMOVE_ITEM_REQUEST, payload: {itemId}});
    try {
        const {data} = await axios.delete(`https://thefridge-api.karapincha.io/${itemId}`);
        dispatch({type: REMOVE_ITEM_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: REMOVE_ITEM_FAILD,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}