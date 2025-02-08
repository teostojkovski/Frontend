import { api } from "../../Config/api";
import { 
    CREATE_MENU_ITEM_FAILURE, 
    CREATE_MENU_ITEM_REQUEST, 
    CREATE_MENU_ITEM_SUCCESS, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS} from "./ActionTypes";

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST});
        try {
            const { data } = await api.post("/api/admin/food", menu, 
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create menu ", data);
            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data});
        } catch (error) {
            console.log("catch error ", error);
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: error});
        }
    };
};

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const { data } = await api.get(
                `/api/food/restaurants/${reqData.restaurantId} ? 
                vegetarian = ${reqData.vegetarian} &
                nonVegetarian = ${reqData.nonVegetarian} &
                seasonal = ${reqData.seasonal} &
                food_catefory = ${reqData.foodCategory}`, 
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            console.log("menu item by restaurants ", data);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
        } catch (error) {
            console.log("catch error ", error);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error});
        }
    };
};