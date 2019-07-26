import { createAction, createAsyncActionCreator } from '../../../store/reducers/redux.helper';
import * as listService from '../../../service/list-service';
import * as keys from '../../../constants';

export const getTopTen = (page, type) => createAsyncActionCreator(keys.GET_TOP_TEN, listService.getTopTen, { page, type });
export const search = (query, page, type) => createAsyncActionCreator(keys.SEARCH, listService.search, { query, page, type });
export const getDetails = (movieId, type) => createAsyncActionCreator(keys.GET_DETAILS, listService.getDetails, { movieId, type });
