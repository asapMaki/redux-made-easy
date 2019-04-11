//Prilagodit ovom projektu - za uradit !!! Olaksat ce kreiranje akcija i reducera

export const createAction  = (type, actionProps) => {
    return {
        type,
        ...actionProps
    };
};

export const createAsyncActionCreator = (actionType, asyncRequestFn, requestParams) => {
    return (dispatch) => {
        dispatch(createAction(`${actionType}_START`, {request: requestParams}));
        return asyncRequestFn(requestParams)
            .then(response => {
                response.json()
                    .then(json => dispatch(createAction(`${actionType}_SUCCESS`, { response: json })))
                    .catch(error => dispatch(createAction(`${actionType}_ERROR`, { error })));
            });

    };
};


// Mozes napravit custom reducer u fajlu i poslati ga ovoj funkciji ili poslati samo
// actionType i generisati sve 3
/*
*
*     const moviesSuccessReducer = (state, action) => {
      const existingMovies = state.response ? state.response.results : [];
      // Create a new state object to be returned
      // When creating the new state, be sure to include any
      // existing properties we want to persist
      return {
        ...state,
        isLoading: false,
        response: {
          ...action.response,
          results: [
            ...existingMovies,
            ...action.response.results
          ]
        }
      };
    }

    i iskoristiti ovako

    const movieBrowserReducer = combineReducers({
      movieModal: movieModalReducer,
      topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
        [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
      }),
      movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES, {
        [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
      }),
      movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),
    });

* */

const initialAsyncState    = { isLoading: false, response: null, request: null };


export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
    return (state = initialState, action) => {
        const actionHandler = actionHandlerKeyFuncs[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    }
};

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
