import { api } from "../../Config/api";
import { FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS } from "./ActionTypes";

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST});
        try {
            const response = await api.get(`/api/cart/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type: FIND_CART_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: FIND_CART_FAILURE, payload: error});
        }
    };
};

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST});
        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: error});
        }
    };
};

