// Actions functions
import axios from "axios"
export const createAction  = (type, actionProps) => {
    return {
        type,
        ...actionProps
    };
};

export const createAsyncActionCreator = (actionType, asyncRequestFn, requestParams) => {
    return (dispatch) => {
        dispatch(createAction(`${actionType}_START`, {request: requestParams}));
        return axios(requestParams)
            .then(response => {
                dispatch(createAction(`${actionType}_SUCCESS`, { response: response.data }))

            }).catch((error)=>{
                dispatch(createAction(`${actionType}_ERROR`, { error }))
            });

    };
};



// Reducers functions
export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
    return (state = initialState, action) => {
        const actionHandler = actionHandlerKeyFuncs[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    }
};

const initialAsyncState    = { isLoading: false, response: null, request: null };

export const createAsyncReducer = (actionType, actionHandlerKeyFuncs = {}, initialState = initialAsyncState) => {
    const startReducerFn = (state, action) => ({
        ...state,
        isLoading: true,
        request: action.request
    });

    const successReducerFn = (state, action) => ({
        ...state,
        isLoading: false,
        response: action.response
    });
    const errorReducerFn = (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    });

    return createReducer(
        initialState,
        {
            [`${actionType}_START`]: startReducerFn,
            [`${actionType}_SUCCESS`]: successReducerFn,
            [`${actionType}_ERROR`]: errorReducerFn,
            ...actionHandlerKeyFuncs
        }
    );
};
