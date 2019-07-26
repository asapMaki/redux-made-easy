import { combineReducers } from 'redux';
import { createAsyncReducer, createReducer } from './redux.helper';
import * as keys from '../../constants';

let initialUser = {
    name: '',
    email: '',
    phone: '',
    locale: 'es',
};

const setUser = (state = initialUser, action) => ({
    user: action,
});

let initalModal = {
    active: false,
};

const getModal = (state = initalModal, action) => ({
    active: action.active,
});

const successReducer = (state, action) => {
    let { results } = action.response;
    const existingArray = state.response && state.request.page !== 1 ? state.response.results : [];
    return {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingArray, ...results],
        },
    };
};

const movies = combineReducers({
    topTen: createAsyncReducer(keys.GET_TOP_TEN, {
        [`${keys.GET_TOP_TEN}_SUCCESS`]: successReducer,
    }),
    Search: createAsyncReducer(keys.SEARCH, {
        [`${keys.SEARCH}_SUCCESS`]: successReducer,
    }),
});

const shows = combineReducers({
    topTen: createAsyncReducer(keys.GET_TOP_TEN, {
        [`${keys.GET_TOP_TEN_SHOWS}_SUCCESS`]: successReducer,
    }),
    Search: createAsyncReducer(keys.SEARCH, {
        [`${keys.SEARCH_SHOWS}_SUCCESS`]: successReducer,
    }),
});

export const rootReducer = combineReducers({
    user: createReducer(initialUser, { [`${keys.SET_USER}`]: setUser }),
    modal: createReducer(initalModal, { [`${keys.MODAL}`]: getModal }),
    movies,
    shows,
});
