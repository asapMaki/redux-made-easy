import {createAction, createAsyncActionCreator}         from "../../constants/redux.helpers";
import {SET_USER,  MODAL}                               from "../../constants";

export const setUser    = user  => createAction(SET_USER, user);
export const setModal   = modal => createAction(MODAL, modal);

