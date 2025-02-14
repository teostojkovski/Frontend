import { LOGOUT } from "../Authentication/ActionTypes";
import * as actionTypes from "./ActionTypes";

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
};