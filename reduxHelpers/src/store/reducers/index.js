import { combineReducers }          from "redux";
import { createAsyncReducer, createReducer }       from '../../constants/redux.helpers';


import * as keys from "../../constants";

let initialUser = {
    name : "",
    email: "",
    phone: "",
    locale:"es"
};

const setUser = (state = initialUser, action) =>({
    user: action,
});


let initalModal = {
    active:false
};

const getModal = (state = initalModal, action) =>({
    active: action.active
});



export const rootReducer = combineReducers({
    user:createReducer(initialUser, {[`${keys.SET_USER}`]: setUser}),
    modal: createReducer(initalModal, {[`${keys.MODAL}`]: getModal}),
});