import { createAction, createAsyncActionCreator } from '../../../store/reducers/redux.helper';
import * as listService from '../../../service/list-service';
import * as keys from '../../../constants';

export const getTopTenShows = (page, type) => createAsyncActionCreator(keys.GET_TOP_TEN_SHOWS, listService.getTopTen, { page, type });
export const searchShows = (query, page, type) => createAsyncActionCreator(keys.SEARCH_SHOWS, listService.search, { query, page, type });
export const getDetailsShow = (showID, type) => createAsyncActionCreator(keys.GET_DETAILS_SHOWS, listService.getDetails, { showID, type });
