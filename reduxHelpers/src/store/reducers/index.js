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

// Mozes napravit custom reducer u fajlu i poslati ga ovoj funkciji ili poslati samo
// actionType i generisati sve 3
const listSuccessReducer2 = (state, action) => {
    const existingMovies = state.response ? state.response.results : [];
    // Create a new state object to be returned
    // When creating the new state, be sure to include any
    // existing properties we want to persist
    return {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingMovies, ...action.response.results],
        },
    };
};

const listSuccessReducer = (state, action) => {
    console.tron.log('Statem, action:', state, action);
    let { results } = action.response;
    const existingArray = state.response && action.response.page != 1 ? state.response.results : [];
    const sliceLength = results.length > 20 ? 20 : results.length;
    console.tron.log('Existing: ', existingArray, state.request.page !== 1);
    console.tron.log('results:', {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingArray, ...results.slice(0, sliceLength)],
        },
    });
    return {
        ...state,
        isLoading: false,
        response: {
            ...action.response,
            results: [...existingArray, ...results],
        },
    };
};

// i iskoristiti ovako

const movies = combineReducers({
    topMovies: createAsyncReducer(keys.GET_TOP_TEN, {
        [`${keys.GET_TOP_TEN}_SUCCESS`]: listSuccessReducer,
    }),
    movieSearch: createAsyncReducer(keys.SEARCH_MOVIES, {
        [`${keys.SEARCH}_SUCCESS`]: listSuccessReducer,
    }),
});

const moviess = combineReducers({
    topTen: createAsyncReducer(keys.GET_TOP_TEN, {
        [`${keys.GET_TOP_TEN}_SUCCESS`]: successReducer,
    }),
    Search: createAsyncReducer(keys.SEARCH, {
        [`${keys.SEARCH}_SUCCESS`]: successReducer,
    }),
});

const shows = combineReducers({
    topTen: createAsyncReducer(keys.GET_TOP_TEN, {
        [`${keys.GET_TOP_TEN_SHOWS}_SUCCESS`]: listSuccessReducer,
    }),
    Search: createAsyncReducer(keys.SEARCH, {
        [`${keys.SEARCH_SHOWS}_SUCCESS`]: listSuccessReducer,
    }),
});

export const rootReducer = combineReducers({
    user: createReducer(initialUser, { [`${keys.SET_USER}`]: setUser }),
    modal: createReducer(initalModal, { [`${keys.MODAL}`]: getModal }),
    movies,
    shows,
});
